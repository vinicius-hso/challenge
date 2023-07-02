import api from "./Api";

interface Veiculo {
    id?: string;
    nome: string;
    marca: string;
    ano: string;
    cor: string;
    descricao?: string;
    vendido?: boolean;
  }

class VeiculosService {
    create(veiculo: Veiculo) {
        return api.post('veiculos', veiculo)
    }

    delete(veiculoId: string) {
        return api.delete(`veiculos/${veiculoId}`)
    }

    update(veiculo: Veiculo) {
        return api.put(`veiculos/${veiculo.id}`, veiculo)
    }

    getAll() {
        // return api.get(`scores?page=${page}&order=${sortBy}&orderField=${serviceType}`);
        return api.get(`veiculos`);
    }

    getAllByParams() {
        // return api.get(`marcas?page=${page}&order=${sortBy}&orderField=${serviceType}`);
    }
}

export default new VeiculosService();