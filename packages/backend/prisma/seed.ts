import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: {email: 'alice@example.com'},
    update: {},
    create: {email: 'alice@example.com', username: 'alice', password: 'password', verified: true}
  })

  await prisma.post.createMany({
    data: [
      {title: 'Welcome', content: 'Welcome to Neon forum', authorId: alice.id}
    ]
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
