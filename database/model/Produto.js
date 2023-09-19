const Sequelize = require('sequelize')
const connection = require('../database')

const Produto = connection.define('produto',{
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },    
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}) 
 
Produto.sync({ force: false }).then(() => { 
  console.log(' === Tabela Produto Criada com Sucesso');
});


module.exports = Produto;