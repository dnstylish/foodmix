const express = require('express')

const router = express.Router()

const homeRouter = require('./home')
const userRouter = require('./users')
const categoryRouter = require('./category')

const routers = [
    {
        prefix: '/',
        router: homeRouter
    },
    {
        prefix: '/users',
        router: userRouter
    },
    {
        prefix: '/categories',
        router: categoryRouter
    }
]

routers.forEach((e) => {
    router.use(e.prefix, e.router)
})

module.exports = router
