const connection = require('../database/connections');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization; //Pega id da ONG logada

        //Pegar do BD os incidentes que pertencem à ONG pelo id da ONG logada
        const incidents = await connection('incidents')
            .where('ong_id', ong_id).select('*');
        return response.json(incidents);
    }
}