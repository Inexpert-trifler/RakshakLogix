import { apiClient } from './client';

export interface DemandForecastPayload {
  location_id: string;
  item_id: string;
  horizon_days?: number;
  model_type?: string;
}

export interface ForecastJobResponse {
  job_id: string;
  forecast_id?: string;
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  progress_pct: number;
  error_message?: string;
}

export interface ForecastPointItem {
  target_date: string;
  prediction: number;
  lower_bound?: number;
  upper_bound?: number;
  confidence_level?: number;
}

export interface ForecastDetailResponse {
  id: string;
  location_id: string;
  item_id: string;
  location_name?: string;
  item_name?: string;
  model_type: string;
  horizon_days: number;
  mae?: number;
  rmse?: number;
  mape?: number;
  points: ForecastPointItem[];
  created_at: string;
}

export interface ModelMetricsResponse {
  models: Array<{
    model_name: string;
    version: string;
    mae: number;
    rmse: number;
    mape: number;
    training_sample_count: number;
    status: string;
  }>;
}

export const forecastApi = {
  generateForecast: (payload: DemandForecastPayload): Promise<ForecastJobResponse> => {
    return apiClient.post<ForecastJobResponse>('/forecast/demand', payload);
  },

  getJobStatus: (jobId: string): Promise<ForecastJobResponse> => {
    return apiClient.get<ForecastJobResponse>(`/forecast/jobs/${jobId}`);
  },

  getForecastById: (id: string): Promise<ForecastDetailResponse> => {
    return apiClient.get<ForecastDetailResponse>(`/forecast/demand/${id}`);
  },

  getModels: (): Promise<ModelMetricsResponse> => {
    return apiClient.get<ModelMetricsResponse>('/forecast/models');
  },
};
