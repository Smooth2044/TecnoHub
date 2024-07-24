import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    picture: {
        type: Array,
        required: true
    }
}, {
    minimize: false
})  

export default mongoose.model('Product', productSchema);