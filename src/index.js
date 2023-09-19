const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = require('../database/database.js');
const Produto = require('../database/model/Produto.js');


app.get('/', (req, res) => {
  res.send('{ ola: ola }');
});

app.post('/inserir_produto', (req, res) => {
  const { nome, descricao, quantidade } = req.body;
  Produto.create({
    nome: nome,
    descricao: descricao,
    quantidade: quantidade
  }).then((e) => console.log('Produto Inserido: ' + e.dataValues.nome))
  res.send(' ');
});

// Suponha que você tenha importado o Express e o modelo Produto corretamente e configurado o servidor Express (app).

app.put('/atualizar_usuario', (req, res) => {
  const nome = req.body.nome; 
  const id = req.body.id;
  Produto.update({ nome: nome }, {
    where: {
      id: id
    }
  })
  .then((resultado) => {
    if (resultado[0] === 1) {
      console.log('Usuário atualizado com sucesso.');
      res.status(200).send('Usuário atualizado com sucesso.');
    } else {
      console.log('Nenhum usuário foi atualizado.');
      res.status(404).send('Nenhum usuário foi atualizado.');
    }
  })
  .catch((erro) => {
    console.error('Erro ao atualizar usuário:', erro);
    res.status(500).send('Erro ao atualizar usuário.');
  });
});

 





app.delete('/produto/:id', (req, res) => {
  const { id } = req.params;
  Produto.destroy({
    where: { id: id }
  }).then(e => { 
        if (e == 0) {
      res.send('è zero não localizou' );
     } else {
      res.send('localizou' );
     }   
  });
});




app.listen(3000, () => {
  console.log('=== Server is running on port 3000 ===');
});



