const Product = require('../models/Product')
const { muntipleMongooseToObject } = require('../../until/mongoose')
const { mongooseToObject } = require('../../until/mongoose')


class AdminController {
   
    admin(req, res, next) {
        Product.find({})
        .then(products => {
            res.render('admin', { products: muntipleMongooseToObject(products) })
        })
        .catch(next)
    }
    deleteProduct(req, res, next) {
        Promise.all([Product.findDeleted({}),Product.countDocumentsDeleted()])
        .then(([productDelete, deleteCount]) =>
        res.render('delete-product', {
            deleteCount,
            productDelete: muntipleMongooseToObject(productDelete),
        })
        )
        .catch(error => next(error))
    }
  
    add(req, res, next) {
        res.render('addproduct')
      }
      edit(req, res, next) {
        Product.findById(req.params.id)
        .then(productEdit => {
            res.render('edit', { productEdit: mongooseToObject(productEdit) })
        })
        .catch(next)
    }
}
module.exports = new AdminController