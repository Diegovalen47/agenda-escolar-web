import { config } from "dotenv";

config();
// Configuracion de variables de entorno
console.log(process.env.PORT);

export default {
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
};
