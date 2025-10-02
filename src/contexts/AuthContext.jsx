import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create separate contexts for patient and staff auth
const AuthContext = createContext(null);
const StaffAuthContext = createContext(null);

// Combined provider that handles both patient and staff auth
export const AuthProvider = ({ children }) => {
  // Patient auth state
  const [user, setUser] = useState(null);
  const [currentStaff, setCurrentStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedStaff = localStorage.getItem('staff');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedStaff) {
      setCurrentStaff(JSON.parse(storedStaff));
    }
    
    setLoading(false);
  }, []);

  // Patient auth methods
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Staff auth methods
  const staffLogin = (staffData) => {
    setCurrentStaff(staffData);
    localStorage.setItem('staff', JSON.stringify(staffData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/patient/login');
  };

  const staffLogout = () => {
    setCurrentStaff(null);
    localStorage.removeItem('staff');
    navigate('/staff/login');
  };

  // Value for patient auth context
  const authValue = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  // Value for staff auth context
  const staffAuthValue = {
    currentStaff,
    loading,
    login: staffLogin,
    logout: staffLogout,
    isAuthenticated: !!currentStaff,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <StaffAuthContext.Provider value={staffAuthValue}>
        {!loading && children}
      </StaffAuthContext.Provider>
    </AuthContext.Provider>
  );
};

// Hook for patient auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Hook for staff auth
export const useStaffAuth = () => {
  const context = useContext(StaffAuthContext);
  if (!context) {
    throw new Error('useStaffAuth must be used within an AuthProvider');
  }
  return context;
};