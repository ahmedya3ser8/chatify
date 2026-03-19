import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../store/useAuthStore';
import Loader from '../components/Loader';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isCheckingAuth, authUser } = useAuthStore();
  if (isCheckingAuth) return <Loader />;
  return authUser ? children : <Navigate to='/login' replace />
}

export default ProtectedRoute;
