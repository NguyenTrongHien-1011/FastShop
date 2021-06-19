const express = require('express')
const router = express.Router()


const adminController = require('../app/controllers/AdminController')


//router.get('/search', siteController.search)

router.get('/add-new-product', adminController.add)
router.get('/products-deleted', adminController.deleteProduct)
router.get('/:id', adminController.edit)
router.get('/', adminController.admin)


module.exports = router