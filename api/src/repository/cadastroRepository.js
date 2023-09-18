import { con } from '../repository/conection.js';

export async function cadastrarCliente (cliente) {
const comando = `   

insert into tb_cadastrocliente ( nm_cliente, ds_email, ds_senha)
                            values( ?, ?, ?);
`


const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.senha]);
cliente.id = resposta.insertId;


return cliente;

}