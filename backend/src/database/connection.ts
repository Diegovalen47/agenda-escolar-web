import { createPool } from "mysql2/promise";
import config from "../config";

export async function connect() {
  const connection = await createPool({
    host: config.dbServer,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    connectionLimit: 10,
  });

  return connection;
}
