var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, username, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(instrumento, nomeArtista, genero, url, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar():", nomeArtista, genero, url);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO publicacao (instrumento, artista, genero, urlPdf, fkUsuario) VALUES ('${instrumento}', '${nomeArtista}', '${genero}', '${url}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    if (idUsuario == undefined) {
        console.log ('Usuario indefinido')
    }

    return database.executar(instrucao);
}

// module.exports = (sequelize, DataTypes) => {
//     // Consulta para obter um usuário pelo ID
// const userId = 1; // Substitua pelo ID do usuário desejado

// usuario.findByPk(userId) // Encontra um usuário pelo ID
//   .then(usuario => {
//     if (usuario) {
//       console.log('Usuário encontrado:', usuario.toJSON());
//     } else {
//       console.log('Usuário não encontrado');
//     }
//   })
//   .catch(err => {
//     console.error('Erro:', err);
//   });
//     let Publicacao = sequelize.define('Publicacao', {	
// 		idPublicacao: {
// 			field: 'idPublicacao',
// 			type: DataTypes.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true
// 		},	

//         instrumento: {
//             field: 'instrumento',
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         nomeArtista: {
//             field: 'artista',
//             type: DataTypes.STRING,
//             allowNull: false
//         },
		
//         genero: {
//             field: 'genero',
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         url: {
//             field: 'urlPDF',
//             type: DataTypes.STRING,
//             allowNull: false
//         },
        
        
//         fkUsuario: {
//             field: 'fkUsuario',
//             type: DataTypes.STRING,
//             allowNull: true
//         }
// 	},
// 	{
// 		tableName: 'publicacao', 
// 		freezeTableName: true, 
// 		underscored: true,
// 		timestamps: false,
// 	});

//     return Publicacao;
// };



module.exports = {
    autenticar,
    publicar
};