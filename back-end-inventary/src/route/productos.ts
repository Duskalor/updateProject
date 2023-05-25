import { Router } from 'express';
import {
  allProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../Controllers/products';
import { multerProducts } from '../middleware/multerProducts';

const router = Router();

router.get('/', allProducts);
router.post('/create', multerProducts.single('products'), createProduct);
router.put('/update/:id', multerProducts.single('products'), updateProduct);
router.delete('/delete/:id', deleteProduct);

router.get('/images/:imageName', function (req, res) {
  const newImageName = req.params.imageName;
  const carpet = 'Products';
  const routePath = `${process.cwd()}/${carpet}`;
  const imagePath = `${routePath}/${newImageName}`;
  res.sendFile(imagePath);
});
export { router };
