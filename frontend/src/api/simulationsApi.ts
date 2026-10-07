import { apiClient } from './client';

export interface CreateSimulationPayload {
  name: string;
  scenario_type: 'ROUTE_UNAVAILABLE' | 'DEMAND_SPIKE' | 'SEVERE_WEATHER' | 'VEHICLE_UNAVAILABLE';
  target_location_id?: string;
  target_route_id?: string;
  parameters?: Record<string, any>;
}

export interface SimulationResponse {
  id: string;
  name: string;
  scenario_type: string;
  status: 'DRAFT' | 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  target_location_id?: string;
  target_route_id?: string;
  parameters?: Record<string, any>;
  created_at: string;
  completed_at?: string;
}

export interface SimulationResultsResponse {
  simulation_id: string;
  scenario_type: string;
  baseline: {
    system_readiness_pct: number;
    at_risk_locations_count: number;
    estimated_convoy_eta_hours: number;
    projected_stockout_items_count: number;
  };
  scenario: {
    system_readiness_pct: number;
    at_risk_locations_count: number;
    estimated_convoy_eta_hours: number;
    projected_stockout_items_count: number;
  };
  delta: {
    readiness_change_pct: number;
    risk_level_change: string;
    eta_delay_hours: number;
    new_stockouts_count: number;
  };
  mitigations: Array<{
    type: string;
    title: string;
    description: string;
    expected_impact: string;
    eta_hours: number;
    confidence: number;
    rank: number;
    explanation: string;
  }>;
}

export const simulationsApi = {
  create: (payload: CreateSimulationPayload): Promise<SimulationResponse> => {
    return apiClient.post<SimulationResponse>('/simulations', payload);
  },

  run: (id: string): Promise<SimulationResponse> => {
    return apiClient.post<SimulationResponse>(`/simulations/${id}/run`);
  },

  getById: (id: string): Promise<SimulationResponse> => {
    return apiClient.get<SimulationResponse>(`/simulations/${id}`);
  },

  getResults: (id: string): Promise<SimulationResultsResponse> => {
    return apiClient.get<SimulationResultsResponse>(`/simulations/${id}/results`);
  },
};
