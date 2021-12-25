const { model, Schema } = require('mongoose')

const SchemaBook = Schema({
  "author": {
    type: String,

  },        
    "title":  {
    type: String,

  },       
  "year":  {
    type: Number,

  },       
})

module.exports = model('book', SchemaBook)