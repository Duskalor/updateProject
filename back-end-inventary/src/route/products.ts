import { Router } from 'express';
import {
  allProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../Controllers/products';
import { multerProducts } from '../middleware/multer';

const router = Router();

router.get('/', allProducts);
router.post('/create', multerProducts.single('products'), createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export { router };
