import {Router} from 'express';
import { CreateMamiferosController } from '../controllers/CreateMamiferosController';

const router = Router();

const createMamiferos = new CreateMamiferosController()

router.post('/mamifero', createMamiferos.handle)

export {router}