import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";
import Loader from "../components/Loader";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isCheckingAuth, authUser } = useAuthStore();
  if (isCheckingAuth) return <Loader />;
  return !authUser ? children : <Navigate to='/' replace />
}

export default PublicRoute;
