const config = {
  production: {
    mysql : {
      uri: process.env.JAWSDB_MARIA_URL,
    }
  },
  default: {
    mysql : {
      uri: process.env.JAWSDB_MARIA_URL,
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
