const connection = require('../database/connections');

module.exports = {
    async index (request, response) {  //async - assíncrona (cada um no seu tempo) 
        const {page = 1} = request.query; //Paginar os resultados. Página 1 é padrão

        //Total de incidentes 
        const [count] = await connection('incidents').count();
        //Colocar entre colchetes pega o primeiro resultado de um possível array de resultados

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //Pegando dados da ONG que possue o incidente
            .limit(5) //Qtd de registros por página
            .offset((page-1) * 5) //Qtd de registros que deve ignorar. (pag. 2 ignora 5, pag. 3 ignora 10....)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 
                'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        //Retorna para o frontend o total de incidentes no cabeçalho da resposta
        response.header('X-Total-Count', count['count(*)']); 
        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        //request.headers; //Contexto da requisição - autenticação, localização (p/ definição de idioma), etc
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id}); //Entre {} tbm passa o nome da resposta
    },

     async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        //Verificar se incidente pertence à ONG logada pelo id da ONG 
        const incident = await connection('incidents')
            .where('id', id).select('ong_id').first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({error: "Operation not permitted."})
        }

        //Apagar o incidente do BD
        await connection('incidents').where('id', id).delete();
        
        return response.status(204).send();
    }
};