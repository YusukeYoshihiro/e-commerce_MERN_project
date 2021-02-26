const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) =>{
  app.use(
    ["api/auth/google", "/api/*"],
    createProxyMiddleware({ target:"http://localhost:5000" })
  )
}

