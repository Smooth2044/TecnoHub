import Product from '../models/product.model.js'

export const getProduct = async (req, res) => {
    try {
        const sort = { _id: -1 }; // Definir el ordenamiento para la búsqueda de productos
        const products = await Product.find().sort(sort); // Buscar todos los productos y ordenarlos según la variable 'sort'
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

export const createProduct = async (req, res) => {
    const {title, description, price, category, picture} = req.body
    
    const newProduct = new Product({
        title,
        description,
        price,
        category,
        picture,
    })
    const savedProduct = await newProduct.save()
    res.json(savedProduct)
}


export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({message: 'Product not Found'})
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!product) return res.status(404).json({message: 'Task not Found'})
    res.json(product);
}

