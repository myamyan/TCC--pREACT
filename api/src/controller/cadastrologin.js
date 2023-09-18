
import { cadastrarCliente } from "../repository/cadastroRepository.js";

import { Router } from "express";

const server = Router();

server.post('/cadastro/cliente', async (req, resp) => {

    try {

        const processCadastro = req.body;

        const clienteCadastrado = await cadastrarCliente(processCadastro);

        if (!processCadastro.nome) 

            throw new Error('Campo nome é obrigatório!');

        if (!processCadastro.email) 

            throw new Error('Campo nome é email!');

        if (!processCadastro.senha) 

            throw new Error('Campo nome é senha!');


            resp.send(clienteCadastrado);

    } catch (err) {

        resp.status(400).send({
            erro: err.message
        })
        
    }

})

export default server;