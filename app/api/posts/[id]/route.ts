import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { updatePostSchema } from '@/lib/validations'
import { successResponse, handleApiError, ApiError } from '@/lib/api-utils'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const post = await prisma.post.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!post) {
      throw new ApiError(404, 'Post not found')
    }

    return successResponse(post)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const validatedData = updatePostSchema.parse(body)

    const existingPost = await prisma.post.findUnique({
      where: { id },
    })

    if (!existingPost) {
      throw new ApiError(404, 'Post not found')
    }

    const updatedPost = await prisma.post.update({
      where: { id },
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

    return successResponse(updatedPost)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const existingPost = await prisma.post.findUnique({
      where: { id },
    })

    if (!existingPost) {
      throw new ApiError(404, 'Post not found')
    }

    await prisma.post.delete({
      where: { id },
    })

    return successResponse({ message: 'Post deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
} 