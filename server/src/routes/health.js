import { Router } from 'express'
import pool from '../config/db.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ api: 'ok', database: 'ok' })
  } catch (err) {
    res.status(500).json({ api: 'ok', database: `error: ${err.code || err.message}` })
  }
})

export default router
