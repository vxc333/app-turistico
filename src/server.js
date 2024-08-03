const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/database');
const Destination = require('./models/Destination');
const Attraction = require('./models/Attraction');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);
app.use(cors());

sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas: ', err);
  });
