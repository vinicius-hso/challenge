import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

//https://orkhan.gitbook.io/typeorm/docs/data-source-options
const AppDataSource = new DataSource({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  type: "postgres",
  synchronize: false,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
  subscribers: [],
  maxQueryExecutionTime: 2000, // 2 seg.
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado!");
  })
  .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
  });

export default AppDataSource;
