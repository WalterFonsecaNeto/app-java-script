import api from "./api";

const LojaService = {

  async listarLojasPorUsuarioIdAsync(ativo,usuarioId) {
    const response = await api.get(`/loja/listarPorUsuario/${usuarioId}?ativo=${ativo}`);
    return response.data;
  }
}

export default LojaService;