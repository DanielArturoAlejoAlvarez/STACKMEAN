'use strict'

const express = require('express')

const route = express.Router()

const employee = require('../controllers/employees.controller')

route.get('/', employee.getEmployees)
route.get('/:productId', employee.getEmployeeById)
route.post('/', employee.createEmployee)
route.put('/:productId', employee.editEmployee)
route.delete('/:productId', employee.deleteEmployee)


module.exports = route