import api from "./api";

const LojaService = {
  async obterUsuarioPorIdAsync(usuarioId) {
    const response = await api.get(`/usuario/obter/${usuarioId}`);
    return response.data;
  },

  async listarUsuariosAsync(ativo) {
    const response = await api.get(`/usuario/listar?ativo=${ativo}`);
    return response.data;
  },

  async logarUsuarioAsync(email, senha) {
    const usuarioLogin = {
      email,
      senha,
    };
    console.log(usuarioLogin);
    const response = await api.post(`/usuario/login`, usuarioLogin);
    return response.data;
  },

  async obterUsuarioPorIdComInformacaoLojaAsync(usuarioId) {
    const response = await api.get(`/usuario/obterComLoja/${usuarioId}`);
    return response.data;
  },

  async cadastrarUsuarioAsync(nome, email, senha) {
    const usuarioCadastro = {
      nome,
      email,
      senha,
    };
    const response = await api.post(`/usuario/cadastrar`, usuarioCadastro);
    return response.data;
  },

  async atualizarNomeUsuarioAsync(usuarioId, nome) {
    const usuarioEditar = {
      nome,
    };
    const response = await api.put(
      `/usuario/atualizar/${usuarioId}`,
      usuarioEditar
    );
    return response.data;
  },

  async deletarUsuarioAsync(usuarioId) {
    const response = await api.put(`/usuario/deletar/${usuarioId}`);
    return response.data;
  },
};

export default LojaService;
