const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({

    userid : {
        type : mongoose.Schema.Type.ObjectId
    },
    name : {
        type : String,
        require : true
    },
    comment : {
        type :String,
        // require : type
    },
    rating : {
        type : Number,
        require : true

    } 

} , {
    timeStamps : true
})
const productSchema = mongoose.Schema({

    name : {
         type:Sting ,
         require : True
    },
    image : {
        type:String,
        require:true
    },
    category : {
        type : String,
        require:true
    },
    price : {
        type : Number,
        require:true
    },
    countInStock : {
        type:Number,
        require:true
    },
    rating : {
        type:Number,
        require:true
    },
    reviews : [reviewSchema]

} , {
    timeStamps : true
})


const product = mongoose.model('products',productSchema)

module.exports = Product