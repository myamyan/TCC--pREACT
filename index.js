import 'dotenv/config'

import cadastroController from './api/controller/cadastroController.js';
import loginController from './api/controller/loginController.js';


import express  from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());


server.use(cadastroController);
server.use(loginController);


server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));