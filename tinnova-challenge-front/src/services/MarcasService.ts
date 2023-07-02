import api from "./Api";

class MarcasService {
  getAll() {
    // return api.get(`scores?page=${page}&order=${sortBy}&orderField=${serviceType}`);
    return api.get(`marcas`);
  }
}

export default new MarcasService();