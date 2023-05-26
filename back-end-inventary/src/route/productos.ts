import { Router } from 'express';
import {
  allProducts,
  createProduct,
  deleteProduct,
  getImg,
  updateImg,
  updateProduct,
} from '../Controllers/products';
import { multerProducts } from '../middleware/multerProducts';

const router = Router();

router.get('/', allProducts);
router.post('/create', multerProducts.single('products'), createProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/images/:imageName', getImg);
router.put('/img/:id', multerProducts.single('products'), updateImg);

export { router };
