'use client'

import { useState } from 'react'

interface CreatePostFormProps {
  onPostCreated: () => void
}

export default function CreatePostForm({ onPostCreated }: CreatePostFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, published }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create post')
      }

      // Reset form
      setTitle('')
      setContent('')
      setPublished(false)
      onPostCreated()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create New Post</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter post title"
            required
            maxLength={100}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
            placeholder="Enter post content"
            required
            maxLength={2000}
          />
        </div>

        <div className="flex items-center">
          <input
            id="published"
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
            Publish immediately
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading || !title.trim() || !content.trim()}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  )
} 
 
