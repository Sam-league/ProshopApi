import { Router } from "express";
import { getProducts, getProductsById } from "../controllers/productController.js";

const router =Router();

router.get('/',getProducts);
router.get(':id',getProductsById);


export default router;