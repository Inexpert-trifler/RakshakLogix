import { apiClient } from './client';

export interface DashboardSummaryResponse {
  total_locations: number;
  total_items: number;
  active_shipments: number;
  critical_alerts: number;
  high_risk_routes: number;
  overall_system_readiness_pct: number;
  inventory: {
    total_units: number;
    below_safety_stock: number;
    total_records: number;
  };
  risk: {
    high_risk_locations: number;
    critical_alerts: number;
  };
  transportation: {
    shipments_in_transit: number;
    delayed_shipments: number;
    vehicles_available: number;
    vehicles_unavailable: number;
  };
  active_simulations: number;
}

export interface LocationMapPin {
  id: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  status: string;
  risk_severity: string;
  stockout_risk_items_count: number;
}

export interface RouteMapLine {
  id: string;
  name: string;
  status: string;
  risk_score: number;
  segments: Array<{
    from_location_id: string;
    to_location_id: string;
    distance_km: number;
    travel_time_hours: number;
    terrain_risk: number;
    road_risk: number;
  }>;
}

export interface DashboardMapResponse {
  locations: LocationMapPin[];
  routes: RouteMapLine[];
}

export interface TrendPoint {
  period: string;
  consumption_qty: number;
  forecast_qty: number;
}

export interface DashboardTrendsResponse {
  trends: TrendPoint[];
}

export const dashboardApi = {
  getSummary: (): Promise<DashboardSummaryResponse> => {
    return apiClient.get<DashboardSummaryResponse>('/dashboard/summary');
  },

  getMap: (): Promise<DashboardMapResponse> => {
    return apiClient.get<DashboardMapResponse>('/dashboard/map');
  },

  getTrends: (days: number = 30): Promise<DashboardTrendsResponse> => {
    return apiClient.get<DashboardTrendsResponse>(`/dashboard/trends?days=${days}`);
  },
};
