const { format } = require('timeago.js')

const timeago = (timestamp) => {
  const salida = format(new Date(timestamp).getTime(), 'en_US')
  console.log('salida:', salida)
  return salida
}

module.exports = {
  timeago,
}