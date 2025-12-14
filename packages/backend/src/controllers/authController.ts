import {Request, Response} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function register(req: Request, res: Response) {
  const {email, username, password} = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({data: {email, username, password: hashed}})
  // In production, send verification email here
  res.json({user: {id: user.id, email: user.email, username: user.username}})
}

export async function login(req: Request, res: Response) {
  const {email, password} = req.body
  const user = await prisma.user.findUnique({where: {email}})
  if (!user) return res.status(401).json({error: 'Invalid credentials'})
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({error: 'Invalid credentials'})
  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET || 'secret', {expiresIn: '7d'})
  res.json({token})
}

export async function verifyEmail(req: Request, res: Response) {
  // Placeholder for email verification flow
  const token = req.query.token
  if (!token) return res.status(400).json({error: 'Missing token'})
  // Verify token and update user
  res.json({message: 'Email verified (placeholder)'})
}
