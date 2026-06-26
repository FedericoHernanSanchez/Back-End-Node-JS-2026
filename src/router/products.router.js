import { Router } from 'express';
import {auth} from '../middleware/auth.middleware.js';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/products.controller.js';

const router = Router()


// api/productos

router.get("/", getProducts)

router.get("/:id", getProductById)

router.post("/create",auth, createProduct)

router.put("/:id",auth, updateProduct)

router.delete("/:id",auth, deleteProduct)

export default router;