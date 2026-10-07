import { apiClient } from './client';

export interface RiskPredictionResponse {
  id: string;
  entity_type: 'LOCATION' | 'ROUTE';
  entity_id: string;
  entity_name?: string;
  risk_type: string;
  severity: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  score: number;
  explanation: string;
  contributing_factors?: Record<string, any>;
  created_at: string;
}

export interface AlertResponse {
  id: string;
  alert_type: string;
  title: string;
  message: string;
  severity: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  status: 'ACTIVE' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED';
  entity_type: string;
  entity_id: string;
  acknowledged_by?: string;
  acknowledged_at?: string;
  resolved_at?: string;
  created_at: string;
}

export const risksApi = {
  getRisks: (): Promise<RiskPredictionResponse[]> => {
    return apiClient.get<RiskPredictionResponse[]>('/risks');
  },

  recalculateRisks: (): Promise<{ message: string; count: number }> => {
    return apiClient.post<{ message: string; count: number }>('/risks/recalculate');
  },

  getAlerts: (status?: string, severity?: string): Promise<AlertResponse[]> => {
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (severity) params.append('severity', severity);
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<AlertResponse[]>(`/alerts${query}`);
  },

  updateAlertStatus: (id: string, status: 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED'): Promise<AlertResponse> => {
    return apiClient.patch<AlertResponse>(`/alerts/${id}`, { status });
  },
};
