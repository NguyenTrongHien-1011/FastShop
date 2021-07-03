const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const Cart = new Schema({
    name: { type: String },
    price: { type: String },
    image: { type: String },
  }, {
    timestamps: true,
  });


  Cart.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all'
} );



  module.exports = mongoose.model('Cart', Cart);