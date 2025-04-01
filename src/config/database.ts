import { Sequelize } from 'sequelize';

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './data/database.sqlite',
});

export default database;