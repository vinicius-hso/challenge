import { Router } from "express";
import { marcaController } from "../controllers";

const routes = Router();

routes.get("/", marcaController.listAll);

export default routes;
