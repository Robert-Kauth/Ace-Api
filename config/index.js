module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    username: "aceapi_app",
    password: "password",
    database: "aceapi_dev",
    host: "localhost",
  },
  sessionSecret: '5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8'
};
