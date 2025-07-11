'use client'

import { useState } from 'react'

interface Post {
  id: string
  title: string
  content: string
  published: boolean
  createdAt: string
  updatedAt: string
}

interface PostCardProps {
  post: Post
  onDelete: (id: string) => void
  onUpdate: (id: string, data: Partial<Post>) => void
}

export default function PostCard({ post, onDelete, onUpdate }: PostCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdate = async () => {
    setIsLoading(true)
    try {
      await onUpdate(post.id, { title, content })
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?')) {
      setIsLoading(true)
      try {
        await onDelete(post.id)
      } catch (error) {
        console.error('Failed to delete post:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Post title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
            placeholder="Post content"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${
          post.published 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {post.published ? 'Published' : 'Draft'}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
      
      <div className="text-sm text-gray-500 mb-4">
        Created: {formatDate(post.createdAt)}
        {post.updatedAt !== post.createdAt && (
          <span className="ml-4">Updated: {formatDate(post.updatedAt)}</span>
        )}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  )
} 