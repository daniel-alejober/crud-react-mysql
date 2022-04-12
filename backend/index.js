import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/blog.js";
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/blogs", blogRoutes);

/*coneccion a la db*/
try {
  db.authenticate();
  console.log("Conexion exitosa");
} catch (error) {
  console.log(error);
}

app.listen(8000, () => {
  console.log("El servidor esta funcionando");
});
