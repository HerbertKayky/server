import {Router} from 'express';
import { CreateMamiferosController } from '../controllers/CreateMamiferosController';
import { FindMamiferosController } from '../controllers/FindMamiferosController';
import { DeleteMamiferosController } from '../controllers/DeleteMamiferosController';
import { UpdateMamiferosController } from '../controllers/UpdateMamiferosController';


const router = Router();

const createMamiferos = new CreateMamiferosController();
const findMamiferos = new FindMamiferosController();
const deleteMamiferos = new DeleteMamiferosController()
const updateMamiferos = new UpdateMamiferosController()

router.post('/mamifero', createMamiferos.handle)
router.get('/mamifero/:name', findMamiferos.handle)
router.delete('/mamifero/:id', deleteMamiferos.handle)
router.put('/mamifero/:id', updateMamiferos.handle)

export {router}