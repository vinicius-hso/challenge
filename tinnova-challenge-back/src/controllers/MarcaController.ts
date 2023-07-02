import AppDataSource from "../dataSource";
import { Request, Response } from "express";
import { Marca } from "../entities";

class MarcaController {
  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const { query } = req;
      const response: any = await AppDataSource.getRepository(Marca).find({
        where: query,
        order: {
          nome: "desc",
        },
      });
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new MarcaController();
