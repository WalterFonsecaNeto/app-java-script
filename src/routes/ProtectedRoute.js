import { Navigate } from "react-router-dom";

// Componente ProtectedRoute genérico
const ProtectedRoute = ({ element, isPublic = false, redirectPath = "/home", isPermited = [] }) => {
  
  const estaLogado = !!localStorage.getItem("usuarioId");
  const tipoUsuarioId = Number(localStorage.getItem("tipoUsuarioId"));

  // Se for uma rota pública e o usuário estiver logado, redireciona para outra página (ex: /home)
  if (isPublic && estaLogado) {
    return <Navigate to={redirectPath} />;
  }

  // Se não for uma rota pública e o usuário não estiver logado, redireciona para login ou home
  if (!isPublic && !estaLogado) {
    return <Navigate to="/" />;
  }

  // Verifica se o tipoUsuarioId está na lista de permissões
  if (isPermited.length > 0 && !isPermited.includes(tipoUsuarioId)) {
    return <Navigate to="/unauthorized" />;
  }

  // Caso contrário, retorna o componente da rota
  return element;
};

export default ProtectedRoute;
