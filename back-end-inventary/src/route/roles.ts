import { Router } from 'express';
import {
  allRoles,
  createRoles,
  deleteRoles,
  updateRoles,
} from '../Controllers/roles';

const router = Router();

router.get('/', allRoles);
router.post('/create', createRoles);
router.put('/update/:id', updateRoles);
router.delete('/delete/:id', deleteRoles);

export { router };
