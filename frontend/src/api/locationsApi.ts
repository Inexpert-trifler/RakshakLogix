import { apiClient } from './client';

export interface LocationResponse {
  id: string;
  code: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  elevation_meters?: number;
  terrain_type: string;
  status: string;
  priority_tier: number;
  created_at: string;
}

export interface CreateLocationPayload {
  code: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  elevation_meters?: number;
  terrain_type?: string;
  status?: string;
  priority_tier?: number;
}

export const locationsApi = {
  list: (type?: string, status?: string): Promise<LocationResponse[]> => {
    const params = new URLSearchParams();
    if (type) params.append('type', type);
    if (status) params.append('status', status);
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<LocationResponse[]>(`/locations${query}`);
  },

  getById: (id: string): Promise<LocationResponse> => {
    return apiClient.get<LocationResponse>(`/locations/${id}`);
  },

  create: (payload: CreateLocationPayload): Promise<LocationResponse> => {
    return apiClient.post<LocationResponse>('/locations', payload);
  },

  update: (id: string, payload: Partial<CreateLocationPayload>): Promise<LocationResponse> => {
    return apiClient.patch<LocationResponse>(`/locations/${id}`, payload);
  },
};
