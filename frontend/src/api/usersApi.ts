import { apiClient } from './client';
import { UserResponse } from './authApi';

export interface CreateUserPayload {
  email: string;
  password?: string;
  full_name: string;
  role: string;
  rank?: string;
  officer_id?: string;
  unit?: string;
  clearance_level?: string;
}

export const usersApi = {
  list: (role?: string, status?: string): Promise<UserResponse[]> => {
    const params = new URLSearchParams();
    if (role) params.append('role', role);
    if (status) params.append('status', status);
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<UserResponse[]>(`/users${query}`);
  },

  getById: (id: string): Promise<UserResponse> => {
    return apiClient.get<UserResponse>(`/users/${id}`);
  },

  create: (payload: CreateUserPayload): Promise<UserResponse> => {
    return apiClient.post<UserResponse>('/users', payload);
  },

  update: (id: string, payload: Partial<CreateUserPayload>): Promise<UserResponse> => {
    return apiClient.patch<UserResponse>(`/users/${id}`, payload);
  },
};
