'use client'

import { useState } from 'react'

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState('posts')

  const endpoints = {
    posts: [
      {
        method: 'GET',
        endpoint: '/api/posts',
        description: 'Get all posts',
        example: 'curl http://localhost:3000/api/posts'
      },
      {
        method: 'POST',
        endpoint: '/api/posts',
        description: 'Create a new post',
        example: `curl -X POST http://localhost:3000/api/posts \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My Post",
    "content": "Post content",
    "published": true
  }'`
      },
      {
        method: 'GET',
        endpoint: '/api/posts/[id]',
        description: 'Get a specific post',
        example: 'curl http://localhost:3000/api/posts/clx123456789'
      },
      {
        method: 'PUT',
        endpoint: '/api/posts/[id]',
        description: 'Update a specific post',
        example: `curl -X PUT http://localhost:3000/api/posts/clx123456789 \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'`
      },
      {
        method: 'DELETE',
        endpoint: '/api/posts/[id]',
        description: 'Delete a specific post',
        example: 'curl -X DELETE http://localhost:3000/api/posts/clx123456789'
      }
    ],
    health: [
      {
        method: 'GET',
        endpoint: '/api/health',
        description: 'Check API health status',
        example: 'curl http://localhost:3000/api/health'
      }
    ]
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Documentation</h2>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {Object.keys(endpoints).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Endpoints */}
      <div className="space-y-4">
        {endpoints[activeTab as keyof typeof endpoints].map((endpoint, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 text-xs font-medium rounded ${
                endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                {endpoint.endpoint}
              </code>
            </div>
            <p className="text-gray-600 mb-3">{endpoint.description}</p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono overflow-x-auto">
              <pre>{endpoint.example}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
 
