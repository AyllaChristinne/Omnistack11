const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
    
    //Listar todas as ONGs
    async index (request, response) {  //async - assíncrona (cada um no seu tempo) 
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    //Criar ONG no BD
    async create(request, response){ 
        const {name, email, whatsapp, city, uf} = request.body; //cada um em sua própria variável
        const id = crypto.randomBytes(4).toString('HEX'); //4 bytes aleatórios em hexadecimal 

        await connection('ongs').insert({ //await - espera acabar pra executar o código seguinte
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
	return response.json({ id }); //retorna para o cliente
    }
};