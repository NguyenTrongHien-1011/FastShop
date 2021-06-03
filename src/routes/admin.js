const express = require('express')
const router = express.Router()


const adminController = require('../app/controllers/AdminController')


//router.get('/search', siteController.search)
router.get('/:id/#edit', adminController.admin)
router.get('/', adminController.admin)


module.exports = router