import AppDataSource from "../dataSource";
import { Request, Response } from "express";
import { Veiculo, Marca } from "../entities";

class VeiculoController {
  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      let { query } = req;
      
      query.marca = { nome: query.marca }
      
      const response: any = await AppDataSource.getRepository(Veiculo).find({
        relations: ['marca'],
        where: query,
        order: {
          criado: "desc",
        },
      });
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const response: any = await AppDataSource.getRepository(Veiculo).find({
        where: { id: id },
      });
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    let { veiculo, marca, ano, cor, descricao, vendido } = req.body;

    if (!veiculo || veiculo.trim().length == 0) {
      return res.json({ error: "Informe o campo veículo" });
    }

    if (!marca || marca.trim().length == 0) {
      return res.json({ error: "Informe o campo marca" });
    }

    if (!ano || ano.trim().length == 0) {
      return res.json({ error: "Informe o campo ano" });
    }

    if (!cor || cor.trim().length == 0) {
      return res.json({ error: "Informe o campo cor" });
    }

    const marcaFound: any = await AppDataSource.getRepository(Marca).findOne({
      where: { id: marca },
    });

    if (!marcaFound) return res.status(404).json({ message: "Marca inválida" });

    const novoVeiculo = new Veiculo();
    novoVeiculo.veiculo = veiculo.trim();
    novoVeiculo.marca = marca.trim();
    novoVeiculo.ano = ano.trim();
    novoVeiculo.cor = cor.trim();
    novoVeiculo.descricao = descricao;
    novoVeiculo.vendido = vendido;

    const response: any = await AppDataSource.manager
      .save(Veiculo, novoVeiculo)
      .catch((error) => {
        return { error: error.message };
      });

    return res.json(response);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { veiculo, marca, ano, cor, descricao, vendido } = req.body;

    if (!id || id.trim() === "") {
      return res.json({ error: "Informe o id do veículo" });
    }

    const marcaFound: any = await AppDataSource.getRepository(Marca).findOne({
      where: { id: marca },
    });

    if (!marcaFound) return res.status(404).json({ message: "Marca inválida" });

    const foundVeiculo: any = await AppDataSource.manager.findOneBy(Veiculo, {
      id,
    });

    if (foundVeiculo && foundVeiculo.id) {
      foundVeiculo.veiculo =
        !veiculo || veiculo.trim() === ""
          ? foundVeiculo.veiculo
          : veiculo.trim();
      foundVeiculo.marca =
        !marca || marca.trim() === "" ? foundVeiculo.marca : marca.trim();
      foundVeiculo.ano =
        !ano || ano.trim() === "" ? foundVeiculo.ano : ano.trim();
      foundVeiculo.cor =
        !cor || cor.trim() === "" ? foundVeiculo.cor : cor.trim();
      foundVeiculo.descricao =
        !descricao || descricao.trim() === ""
          ? foundVeiculo.descricao
          : descricao.trim();
      foundVeiculo.vendido =
        !vendido 
          ? foundVeiculo.vendido
          : vendido

      const response = await AppDataSource.manager
        .save(Veiculo, foundVeiculo)
        .catch((error) => {
          // testa se o CNPJ é repetido
          // if (/(cnpj)[\s\S]+(already exists)/.test(e.detail)) {
          //   return { error: "Este CNPJ já existe no cadastro" };
          // }
          return error.message;
        });
      return res.json(response);
    } else {
      return res.json({ error: "Cliente não localizado" });
    }
  }

  public async updatePatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { marca } = req.body;

    if (!id || id.trim() === "") {
      return res.json({ error: "Informe o id do veículo" });
    }

    if (marca) {
      const marcaFound: any = await AppDataSource.getRepository(Marca).findOne({
        where: { nome: marca },
      });
  
      if (!marcaFound) return res.status(404).json({ message: "Marca inválida" }); 

      req.body.marca = marcaFound.id
    }

    const response: any = await AppDataSource.manager
      .update(Veiculo, id, req.body)
      .catch((error) => {
        return error.message;
      });

    if (response && response.affected === 1)
      return res.json({ message: "Veículo atualizado com sucesso" });
    else return res.status(404).json({ error: "Veiculo não localizado" });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id || id.trim() === "") {
      return res.json({ error: "Forneça o id do veículo" });
    }
    const veiculoFound: any = await AppDataSource.manager.findOneBy(Veiculo, {
      id,
    });
    
    if (veiculoFound && veiculoFound.id) {
      const response = await AppDataSource.manager
        .remove(Veiculo, veiculoFound)
        .catch((error) => error.message);
      return res.json(response);
    } else {
      return res.status(404).json({ error: "Veículo não localizado" });
    }
  }
}

export default new VeiculoController();
