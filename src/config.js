const keys = {
  production: {
    mysql : {
      uri: process.env.JAWSDB_MARIA_URL,
    }
  },
  test: {
    mysql : {
      uri: process.env.JAWSDB_MARIA_URL,
    }
  },
  default: {
    mysql : {
      uri: process.env.JAWSDB_MARIA_URL,
    }
  },
}

module.exports = keys[process.env.NODE_ENV] || keys.default
