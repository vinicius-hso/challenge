import { Router, Request, Response } from "express";
import veiculo from "./veiculo";
import marca from "./marca";
// import { colaborador as colaboradorController } from "../controllers";
// import { authorization } from "../middlewares";
const routes = Router();

// routes.use("/cliente", authorization, cliente);
// routes.use("/colaborador", authorization, colaborador);
// routes.use("/projeto", authorization, projeto);
// routes.use("/turno", authorization, turno);
// routes.post("/login", colaboradorController.login);

routes.use("/veiculos", veiculo);
routes.use("/marcas", marca)

routes.use((req: Request, res: Response) =>
  res.status(404).json({ error: "Requisição desconhecida" })
);

export default routes;
