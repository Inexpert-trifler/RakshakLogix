import { apiClient } from './client';

export interface ConsumptionImportResponse {
  job_id: string;
  total_rows: number;
  accepted_rows: number;
  rejected_rows: number;
  quality_score_pct: number;
  errors: string[];
  status: string;
}

export const consumptionApi = {
  importCsv: async (file: File): Promise<ConsumptionImportResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post<ConsumptionImportResponse>('/consumption/import', formData);
  },
};
