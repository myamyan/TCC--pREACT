

import axios from 'axios';



export async function cadastrarCliente(nome, email, senha) {



    const resposta = await axios.post('http://localhost:5000/cadastro/cliente', {


    nome: nome, 
    email: email,
    senha: senha



    })


    return resposta.data;

}