import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import { db } from './config/express';
import { router } from './route';

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

//allroutes
app.use(router);

// db and port
db().then(() => {
  console.log('db conectado');
  app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`);
  });
});
