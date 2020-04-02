const connection = require('../database/Mysql')

module.exports = {
    async cadastrar_usuario(request, response){
        const data = request.body
        await connection.table('usuarios').insert({ 
            nome: data.nome,
            email: data.email
         }).then(result => {
            const idUsuario = result[0]
            return response.json(idUsuario)
        })
    },
    async listar_usuarios(request, response) {
        const usuarios = []
        const data = await connection.table('usuarios')
        .select('*')
       return response.json(data)
    }
}