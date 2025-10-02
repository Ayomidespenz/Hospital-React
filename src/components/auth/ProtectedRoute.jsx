import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';



// For patient routes
export const PatientProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/patient/login" state={{ from: location }} replace />;
  }

  return children;
};

// For staff routes
export const StaffProtectedRoute = ({ children }) => {
  const { currentStaff, loading } = useStaffAuth();
  const location = useLocation();

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  if (!currentStaff) {
    return <Navigate to="/staff/login" state={{ from: location }} replace />;
  }

  return children;
};
// export default ProtectedRoute;
