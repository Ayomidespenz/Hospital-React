import { Navigate, useLocation } from 'react-router-dom';
import { useStaffAuth } from '../../contexts/StaffAuthContext';

export const StaffProtectedRoute = ({ children }) => {
  const { currentStaff } = useStaffAuth();
  const location = useLocation();

  if (!currentStaff) {
    // Redirect to staff login page, but save the current location they were trying to go to
    return <Navigate to="/staff/login" state={{ from: location }} replace />;
  }

  return children;
};

export default StaffProtectedRoute;
