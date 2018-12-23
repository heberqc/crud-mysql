const config = require('./config')
const mysql = require('mysql')
const { promisify } = require('util')

const pool = mysql.createPool(config.mysql.uri)

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('DATABASE CONNECTION WAS CLOSED')
    }
    if (err.code === 'ERR_CON_COUNT_ERROR') {
      console.log('DATABASE CONNECTION WAS CLOSED')
    }
    if (err.code === 'ECONNREFUSED') {
      console.log('DATABASE CONNECTION WAS REFUSED')
    }
  }
  if (connection) connection.release()
  console.log('DB is connected')
  return
})

// Promisify pool querys
pool.query = promisify(pool.query)

module.exports = pool
