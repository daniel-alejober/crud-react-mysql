import { Sequelize } from "sequelize";

const db = new Sequelize("react-crud", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
