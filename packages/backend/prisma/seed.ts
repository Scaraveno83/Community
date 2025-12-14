import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  const hashed = await bcrypt.hash('password', 10)
  const alice = await prisma.user.upsert({
    where: {email: 'alice@example.com'},
    update: {},
    create: {email: 'alice@example.com', username: 'alice', password: hashed, verified: true}
  })
