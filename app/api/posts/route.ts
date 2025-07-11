import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { createPostSchema } from '@/lib/validations'
import { successResponse, handleApiError, ApiError } from '@/lib/api-utils'

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return successResponse(posts)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createPostSchema.parse(body)

    const post = await prisma.post.create({
      data: validatedData,
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return successResponse(post, 201)
  } catch (error) {
    return handleApiError(error)
  }
} 