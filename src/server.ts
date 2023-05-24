import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config()

const app = express();


app.use(cors());
app.use(express.json())
app.use(router)

app.listen(3002)
console.log('funfou!!')





