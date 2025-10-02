// src/contexts/StaffAuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
const StaffAuthContext = createContext();

// Create a custom hook to use the staff auth context
export const useStaffAuth = () => {
  const context = useContext(StaffAuthContext);
  if (context === undefined) {
    throw new Error('useStaffAuth must be used within a StaffAuthProvider');
  }
  return context;
};

// Create the provider component
export const StaffAuthProvider = ({ children }) => {
  const [currentStaff, setCurrentStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if staff is already logged in
    const staff = JSON.parse(localStorage.getItem('staff'));
    if (staff) {
      setCurrentStaff(staff);
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      // Mock staff data based on role
      let staff;
      
      // Common staff properties
      const baseStaff = {
        email,
        role,
        department: '',
        avatar: ''
      };

      // Set role-specific properties
      switch(role) {
        case 'doctor':
          staff = {
            ...baseStaff,
            id: `d${Math.floor(Math.random() * 1000)}`,
            name: `Dr. ${email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}`,
            department: 'Cardiology',
            avatar: '/images/doctor1.jpg',
            specialization: 'Cardiologist'
          };
          break;
          
        case 'nurse':
          staff = {
            ...baseStaff,
            id: `n${Math.floor(Math.random() * 1000)}`,
            name: `Nurse ${email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}`,
            department: 'Emergency',
            avatar: '/images/nurse1.jpg',
            shift: 'Day'
          };
          break;
          
        case 'admin':
          staff = {
            ...baseStaff,
            id: `a${Math.floor(Math.random() * 1000)}`,
            name: `Admin ${email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}`,
            department: 'Administration',
            avatar: '/images/admin.png',
            permissions: ['all']
          };
          break;
          
        case 'receptionist':
          staff = {
            ...baseStaff,
            id: `r${Math.floor(Math.random() * 1000)}`,
            name: `Receptionist ${email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}`,
            department: 'Front Desk',
            avatar: '/images/receptionist.png',
            canSchedule: true
          };
          break;
          
        case 'lab_technician':
          staff = {
            ...baseStaff,
            id: `l${Math.floor(Math.random() * 1000)}`,
            name: `Lab Tech ${email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)}`,
            department: 'Laboratory',
            avatar: '/images/lab_tech.png',
            canProcessTests: true
          };
          break;
          
        default:
          throw new Error('Invalid role selected');
      }

      // In a real app, you would validate credentials with your backend here
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      localStorage.setItem('staff', JSON.stringify(staff));
      setCurrentStaff(staff);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('staff');
    setCurrentStaff(null);
    navigate('/staff/login');
  };

  const value = {
    currentStaff,
    isAuthenticated: !!currentStaff,
    login,
    logout,
    loading
  };

  return (
    <StaffAuthContext.Provider value={value}>
      {!loading && children}
    </StaffAuthContext.Provider>
  );
};

// Export the context and provider
export default StaffAuthContext;