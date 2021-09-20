module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    username: "aceapi_app",
    password: "password",
    database: "aceapi_dev",
    host: "localhost",
  },
};
