import { Navigate } from "react-router-dom";

// Componente ProtectedRoute genérico
const ProtectedRoute = ({ element, isPublic = false, redirectPath = "/home" }) => {
  
  const estaLogado = !!localStorage.getItem("usuarioId");

  // Se for uma rota pública e o usuário estiver logado, redireciona para outra página (ex: /home)
  if (isPublic && estaLogado) {
    return <Navigate to={redirectPath} />;
  }

  // Se não for uma rota pública e o usuário não estiver logado, redireciona para login ou home
  if (!isPublic && !estaLogado) {
    return <Navigate to="/" />;
  }

  // Caso contrário, retorna o componente da rota
  return element;
};

export default ProtectedRoute;
