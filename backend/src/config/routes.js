const express = require('express')
const Modules = require('pm2/lib/API/Modules/Modules')

Modules.exports = function(server){
    // API Routers
    const router = express.Router()
    server.use('/api', router) 

    //TODO Routes
    const todoService = requite('../api/todo/todoService.js')
    todoService.register(router, '/todos')
}