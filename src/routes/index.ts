import {Router} from 'express';
import { CreateMamiferosController } from '../controllers/CreateMamiferosController';
import { FindMamiferosController } from '../controllers/FindMamiferosController';
import { DeleteMamiferosController } from '../controllers/DeleteMamiferosController';


const router = Router();

const createMamiferos = new CreateMamiferosController();
const findMamiferos = new FindMamiferosController();
const deleteMamiferos = new DeleteMamiferosController()

router.post('/mamifero', createMamiferos.handle)
router.get('/mamifero/:name', findMamiferos.handle)
router.delete('/mamifero/:id', deleteMamiferos.handle)


export {router}