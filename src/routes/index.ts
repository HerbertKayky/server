import {Router} from 'express';
import { CreateMamiferosController } from '../controllers/CreateMamiferosController';
import { FindMamiferosController } from '../controllers/FindMamiferosController';

const router = Router();

const createMamiferos = new CreateMamiferosController();
const findMamiferos = new FindMamiferosController();

router.post('/mamifero', createMamiferos.handle)
router.get('/mamifero/:name', findMamiferos.handle)

export {router}