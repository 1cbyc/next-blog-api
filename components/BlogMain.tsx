'use client'

import { useState } from 'react'
import CreatePostForm from './CreatePostForm'
import PostsList from './PostsList'

export default function BlogMain() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <>
      <CreatePostForm onPostCreated={() => setRefreshKey(k => k + 1)} />
      <PostsList key={refreshKey} />
    </>
  )
}
 
