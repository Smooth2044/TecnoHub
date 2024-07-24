import {Router} from 'express'
import { getProduct, createProduct, deleteProduct } from '../controllers/product.controller.js';

const router = Router()

router.get('/product', getProduct)
router.post('/product', createProduct)
router.delete('/product/:id', deleteProduct)
router.put('/product/:id', deleteProduct)


export default router;