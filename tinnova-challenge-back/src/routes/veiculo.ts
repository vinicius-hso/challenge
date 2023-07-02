import { Router } from "express";
import { veiculoController } from "../controllers";
// import  } from "../middlewares";
const routes = Router();

// routes.post("/", authAdmin, cliente.create);
// routes.put("/", authAdmin, cliente.update);
// routes.delete("/", authAdmin, cliente.delete);
// routes.get("/:status", cliente.list);

routes.get("/", veiculoController.listAll);
routes.get("/:id", veiculoController.getById);
routes.post("/", veiculoController.create);
routes.put("/:id", veiculoController.update);
routes.patch("/:id", veiculoController.updatePatch);
routes.delete("/:id", veiculoController.delete);

export default routes;
