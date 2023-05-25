import { Router } from 'express';
import {
  allCategorias,
  createCategorias,
  deleteCategorias,
  updateCategorias,
} from '../Controllers/categorias';

const router = Router();

router.get('/', allCategorias);
router.post('/create', createCategorias);
router.put('/update/:id', updateCategorias);
router.delete('/delete/:id', deleteCategorias);

export { router };
