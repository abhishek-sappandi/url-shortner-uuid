const express = require('express')
const route = express.Router()
const urlsController = require('../app/controller/urlController')

route.get('/url/:hashedUrl',urlsController.list)
route.post('/urls',urlsController.create)
route.put('/:hashedUrl',urlsController.edit)
route.delete('/:hashedUrl',urlsController.remove)
//route.get('/:id?type',urlsController.hash)
route.get('/:hashedUrl',urlsController.hash)

module.exports = route