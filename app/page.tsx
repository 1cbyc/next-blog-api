import CreatePostForm from '@/components/CreatePostForm'
import PostsList from '@/components/PostsList'
import ApiDocs from '@/components/ApiDocs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog API
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A modern REST API for blog management built with Next.js, Prisma, and TypeScript.
            Create, read, update, and delete blog posts with a beautiful interface.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <CreatePostForm onPostCreated={() => {
            // This will trigger a refresh of the posts list
            window.location.reload()
          }} />
          
          <PostsList />
          
          <div className="mt-12">
            <ApiDocs />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>Built with Next.js, Prisma, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}
