#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Setting up Blog API...\n')

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local')
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...')
  fs.writeFileSync(envPath, 'DATABASE_URL="file:./dev.db"\n')
  console.log('✅ Created .env.local')
} else {
  console.log('✅ .env.local already exists')
}

// Install dependencies
console.log('\n📦 Installing dependencies...')
try {
  execSync('npm install', { stdio: 'inherit' })
  console.log('✅ Dependencies installed')
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message)
  process.exit(1)
}

// Generate Prisma client
console.log('\n🔧 Generating Prisma client...')
try {
  execSync('npx prisma generate', { stdio: 'inherit' })
  console.log('✅ Prisma client generated')
} catch (error) {
  console.error('❌ Failed to generate Prisma client:', error.message)
  process.exit(1)
}

// Push database schema
console.log('\n🗄️ Setting up database...')
try {
  execSync('npx prisma db push', { stdio: 'inherit' })
  console.log('✅ Database schema pushed')
} catch (error) {
  console.error('❌ Failed to push database schema:', error.message)
  process.exit(1)
}

console.log('\n🎉 Setup complete!')
console.log('\nNext steps:')
console.log('1. Run "npm run dev" to start the development server')
console.log('2. Open http://localhost:3000 to view the application')
console.log('3. Run "npm run db:studio" to open Prisma Studio')
console.log('\nHappy coding! 🚀') 
 
