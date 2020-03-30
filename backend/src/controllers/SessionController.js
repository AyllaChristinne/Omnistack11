const connection = require('../database/connections');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        //Verificando se a ONG existe
        const ong = await connection('ongs')
            .where('id', id).select('name').first();

        if (!ong){ //400 - Bad Request
            return response.status(400).json({'error': 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}