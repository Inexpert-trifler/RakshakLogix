import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi, UserResponse } from '../api/authApi';
import { setAuthToken } from '../api/client';

export interface UserProfile {
  id?: string;
  name: string;
  email: string;
  rank: string;
  officerId: string;
  role: 'LOGISTICS_PLANNER' | 'CORPS_COMMANDER' | 'DEPOT_COMMANDER' | 'AUDIT_OFFICER' | 'ADMIN';
  roleLabel: string;
  unit: string;
  node: string;
  clearance: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserProfile;
  login: (email?: string, password?: string, role?: string) => Promise<void>;
  logout: () => void;
  selectRole: (role: UserProfile['role']) => void;
  refreshUser: () => Promise<void>;
}

const DEFAULT_USER: UserProfile = {
  name: 'Bhavya Kumar',
  email: 'planner@rakshaklogix.gov.in',
  rank: 'Maj.',
  officerId: 'IC-78921K',
  role: 'LOGISTICS_PLANNER',
  roleLabel: 'Duty Logistics Planner',
  unit: 'HQ Northern Logistics Command',
  node: 'NODE DL-9941',
  clearance: 'SECRET // SEC-LVL 4',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('rl_token') || localStorage.getItem('rl_auth') === 'true';
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [user, setUser] = useState<UserProfile>(() => {
    const savedUser = localStorage.getItem('rl_user');
    return savedUser ? JSON.parse(savedUser) : DEFAULT_USER;
  });

  const mapBackendUserToProfile = (backendUser: UserResponse): UserProfile => {
    let roleLabel = 'Duty Logistics Planner';
    let clearance = 'SECRET // SEC-LVL 4';

    const role = (backendUser.role || 'LOGISTICS_PLANNER') as UserProfile['role'];

    if (role === 'CORPS_COMMANDER') {
      roleLabel = 'Corps Logistics Commander';
      clearance = 'TOP SECRET // SEC-LVL 5';
    } else if (role === 'DEPOT_COMMANDER') {
      roleLabel = 'Central Depot Commander';
      clearance = 'CONFIDENTIAL // SEC-LVL 3';
    } else if (role === 'AUDIT_OFFICER') {
      roleLabel = 'Logistics Audit & Inspector';
      clearance = 'RESTRICTED // SEC-LVL 5';
    } else if (role === 'ADMIN') {
      roleLabel = 'System Administrator';
      clearance = 'TOP SECRET // SEC-LVL 5';
    }

    return {
      id: backendUser.id,
      name: backendUser.full_name || 'Bhavya Kumar',
      email: backendUser.email || 'planner@rakshaklogix.gov.in',
      rank: backendUser.rank || 'Maj.',
      officerId: backendUser.officer_id || 'IC-78921K',
      role,
      roleLabel,
      unit: backendUser.unit || 'HQ Northern Logistics Command',
      node: 'NODE DL-9941',
      clearance: backendUser.clearance_level || clearance,
    };
  };

  const refreshUser = async () => {
    try {
      const me = await authApi.getMe();
      const profile = mapBackendUserToProfile(me);
      setUser(profile);
      setIsAuthenticated(true);
      localStorage.setItem('rl_auth', 'true');
      localStorage.setItem('rl_user', JSON.stringify(profile));
    } catch (err) {
      console.warn('Could not refresh user session from backend:', err);
    }
  };

  useEffect(() => {
    setIsLoading(false);

    const handleUnauthorized = () => {
      // Bypassed for open demo access
    };
    window.addEventListener('rl_unauthorized', handleUnauthorized);
    return () => window.removeEventListener('rl_unauthorized', handleUnauthorized);
  }, []);

  const login = async (_email?: string, _password?: string, selectedRole?: string) => {
    setIsLoading(true);
    try {
      setIsAuthenticated(true);
      localStorage.setItem('rl_auth', 'true');
      if (selectedRole) {
        selectRole(selectedRole as UserProfile['role']);
      }
      // Silently attempt API login in background if available
      authApi.login({ email: _email || 'planner@rakshaklogix.gov.in', password: _password || 'password123' }).catch(() => null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authApi.logout();
    setIsAuthenticated(false);
    localStorage.setItem('rl_auth', 'false');
    setUser(DEFAULT_USER);
  };


  const selectRole = (role: UserProfile['role']) => {
    let roleLabel = 'Duty Logistics Planner';
    let clearance = 'SECRET // SEC-LVL 4';

    if (role === 'CORPS_COMMANDER') {
      roleLabel = 'Corps Logistics Commander';
      clearance = 'TOP SECRET // SEC-LVL 5';
    } else if (role === 'DEPOT_COMMANDER') {
      roleLabel = 'Central Depot Commander';
      clearance = 'CONFIDENTIAL // SEC-LVL 3';
    } else if (role === 'AUDIT_OFFICER') {
      roleLabel = 'Logistics Audit & Inspector';
      clearance = 'RESTRICTED // SEC-LVL 5';
    } else if (role === 'ADMIN') {
      roleLabel = 'System Administrator';
      clearance = 'TOP SECRET // SEC-LVL 5';
    }

    setUser(prev => {
      const updated = {
        ...prev,
        role,
        roleLabel,
        clearance,
      };
      localStorage.setItem('rl_user', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout, selectRole, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

