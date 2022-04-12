import db from "../database/db.js";
import { DataTypes } from "sequelize";

/*le vamos a pasar el nombre de la tabla 'blogs', y destro del objeto los
campos que vamos a utilizar */
const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
