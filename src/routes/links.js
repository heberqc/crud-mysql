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
  res.redirect('/links')
})

router.get('/', async (req, res) => {
  try {
    const links = await pool.query('SELECT * FROM links')
    console.log('links:', links)
    res.render('links/list', { links })
  } catch (error) {
    console.log('Error on select the links:', error)
    res.send('Error on select the links')
  }
})

module.exports = router
