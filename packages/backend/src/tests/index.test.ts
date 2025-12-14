import request from 'supertest'
import express from 'express'

const app = express()
app.get('/', (req, res) => res.json({message: 'ok'}))

describe('GET /', () => {
  it('returns 200', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({message: 'ok'})
  })
})
