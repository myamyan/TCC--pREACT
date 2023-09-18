import 'dotenv/config'

import cadastroController from './src/controller/cadastrologin.js';
import loginController from './src/controller/loginController.js';

import express  from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.use(cadastroController);
server.use(loginController);


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));