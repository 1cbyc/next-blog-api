# NextJS Blog API

(asked ai to check my project and write this readme for me)

REST API for blog management I built with Next.js, Prisma, and TypeScript. It's to Create, read, update, and delete blog posts with a beautiful interface.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete blog posts
- **Modern Tech Stack**: Next.js 14, Prisma ORM, TypeScript, Tailwind CSS
- **Database Integration**: SQLite database with Prisma for type-safe database operations
- **Input Validation**: Zod schema validation for all API inputs
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Beautiful UI**: Modern, responsive interface with Tailwind CSS
- **Real-time Updates**: Immediate UI updates after operations
- **Type Safety**: Full TypeScript coverage throughout the application
- **Health Check**: API health monitoring endpoint

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: SQLite with Prisma ORM
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Development**: ESLint, Prettier

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/1cbyc/next-blog-api.git
cd blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Push the schema to the database
npm run db:push

# (Optional) Open Prisma Studio to view/edit data
npm run db:studio
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 API Endpoints

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts` | Get all posts |
| `POST` | `/api/posts` | Create a new post |
| `GET` | `/api/posts/[id]` | Get a specific post |
| `PUT` | `/api/posts/[id]` | Update a specific post |
| `DELETE` | `/api/posts/[id]` | Delete a specific post |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Check API health status |

## 📝 API Examples

### Create a Post

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "published": true
  }'
```

### Get All Posts

```bash
curl http://localhost:3000/api/posts
```

### Update a Post

```bash
curl -X PUT http://localhost:3000/api/posts/[id] \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'
```

### Delete a Post

```bash
curl -X DELETE http://localhost:3000/api/posts/[id]
```

<!-- ## 🏗️ Project Structure

```
blog-api/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── posts/         # Posts endpoints
│   │   │   ├── route.ts   # GET/POST all posts
│   │   │   └── [id]/      # Individual post operations
│   │   │       └── route.ts
│   │   └── health/        # Health check endpoint
│   │       └── route.ts
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── CreatePostForm.tsx # Post creation form
│   ├── PostCard.tsx       # Individual post display
│   └── PostsList.tsx      # Posts list component
├── lib/                   # Utility libraries
│   ├── api-utils.ts       # API response utilities
│   ├── db.ts             # Database client
│   └── validations.ts     # Zod validation schemas
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── [config files]        # Configuration files
``` -->

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations

## 🎨 Features in Detail

### Database Schema

The application uses a simple but effective Post model:

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}
```

### Input Validation

All API inputs are validated using Zod schemas:

```typescript
export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  content: z.string().min(1, 'Content is required').max(2000),
  published: z.boolean().optional().default(false),
})
```

### Error Handling

Comprehensive error handling with proper HTTP status codes and user-friendly error messages.

### UI Components

- **CreatePostForm**: Form for creating new posts with validation
- **PostCard**: Individual post display with edit/delete functionality
- **PostsList**: List of all posts with real-time updates

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://prisma.io/) for the type-safe database toolkit
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Zod](https://zod.dev/) for runtime type validation

---

**Note**: This project is currently under development. The README will be updated as the project evolves. 
 
