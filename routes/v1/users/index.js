const routes = require('express').Router()

module.exports = () => {
    routes.get('/',require('./getAllUsers')())
    routes.get('/:id',require('./get')())
    routes.put('./:id',require('./put')())
    return routes
}