import { apiClient, setAuthToken } from './client';

export interface LoginParams {
  email: string;
  password?: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export interface UserResponse {
  id: string;
  email: string;
  full_name: string;
  role: string;
  rank?: string;
  officer_id?: string;
  unit?: string;
  clearance_level?: string;
  status: string;
}

export const authApi = {
  login: async (params: LoginParams): Promise<TokenResponse> => {
    const data = await apiClient.post<TokenResponse>('/auth/login', {
      email: params.email,
      password: params.password || 'password123',
    });
    setAuthToken(data.access_token);
    return data;
  },

  getMe: async (): Promise<UserResponse> => {
    return apiClient.get<UserResponse>('/auth/me');
  },

  refreshToken: async (refreshToken: string): Promise<TokenResponse> => {
    const data = await apiClient.post<TokenResponse>('/auth/refresh', {
      refresh_token: refreshToken,
    });
    setAuthToken(data.access_token);
    return data;
  },

  logout: () => {
    setAuthToken(null);
    localStorage.setItem('rl_auth', 'false');
  },
};
