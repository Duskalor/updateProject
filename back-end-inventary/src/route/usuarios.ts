import { Router } from 'express';
import {
  allUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
} from '../Controllers/usuarios';

const router = Router();

router.get('/', allUsuarios);
router.post('/create', createUsuario);
router.put('/update/:id', updateUsuario);
router.delete('/delete/:id', deleteUsuario);

export { router };
