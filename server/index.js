// 1. Import json-server
const jsonServer = require('json-server')

// 2. Create an instance of json-server
const server = jsonServer.create()

// 3. Create middleware
const middleware = jsonServer.defaults()

// 4. Create a router
const router = jsonServer.router('db.json')

// 5. Use middleware and router
server.use(middleware)
server.use(router)

// 6. Define PORT (use environment variable if available)
const PORT = process.env.PORT || 3000

// 7. Start server
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
})
