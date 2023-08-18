const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required:true
    },
    publishedDate: String,
    author:{
        type: String,
        required: true
    },
    created:Date,
    updated:Date,
    category:[{type: Schema.Types.ObjectId, ref:'Category'}]
});

bookSchema.methods.saveTitleChecking = function (){
    return this.save();

}

bookSchema.statics.filterByPrice = function(price){
    return this.find().where('price').gt(price);
}

bookSchema.pre(['save'], function(next){
    this.created = new Date();
    this.updated = new Date();
    next();
})

module.exports = mongoose.model('Book', bookSchema);  