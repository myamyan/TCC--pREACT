
import {con} from '../repository/conection.js'

export async function verificarEmailExistente(email) {
try {
    const [rows, fields] = await con.execute('SELECT * FROM tb_cadastrocliente WHERE ds_email = ?', [email]);

    return rows.length > 0;
} catch (err) {
    console.error('Erro ao verificar email existente:', err);
    return false; 
}
}

export async function buscaremail(email) {
    const comando =

        `SELECT id_cliente  id,
        ds_email          email,
        ds_senha          senha
    FROM tb_cadastrocliente
WHERE ds_email = ?`;

    const [resp] = await con.query(comando, [`%${email}%`]);
    return resp;
}
