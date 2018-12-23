const { Router } = require('express')
const router = Router()

const pool = require('../database')

router.get('/add', (req, res) => {
  res.render('links/add')
})

router.post('/add', async (req, res) => {
  const newLink = { ...req.body }
  console.log('newLink:', newLink)
  try {
    const insert = await pool.query('INSERT INTO links set ?', [newLink])
    console.log('insert:', insert)
  } catch (error) {
    console.log('Error inserting the new link:', error)
  }
  res.send('recibido')
})

module.exports = router
