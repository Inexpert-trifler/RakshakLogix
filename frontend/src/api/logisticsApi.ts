import { apiClient } from './client';

export interface VehicleResponse {
  id: string;
  code: string;
  name: string;
  type: string;
  capacity_payload_kg: number;
  capacity_volume_m3: number;
  fuel_capacity_liters?: number;
  fuel_efficiency_km_per_liter?: number;
  availability_status: string;
  home_location_id: string;
  current_location_id?: string;
  home_location_name?: string;
}

export interface CreateVehiclePayload {
  code: string;
  name: string;
  type: string;
  capacity_payload_kg: number;
  capacity_volume_m3: number;
  home_location_id: string;
  availability_status?: string;
}

export interface ShipmentResponse {
  id: string;
  code: string;
  origin_location_id: string;
  destination_location_id: string;
  origin_location_name?: string;
  destination_location_name?: string;
  priority: string;
  status: string;
  vehicle_id?: string;
  vehicle_code?: string;
  route_id?: string;
  total_weight_kg?: number;
  total_volume_m3?: number;
  planned_departure_at?: string;
  planned_arrival_at?: string;
  actual_departure_at?: string;
  actual_arrival_at?: string;
  created_at: string;
  items?: Array<{
    item_id: string;
    item_name?: string;
    quantity: number;
  }>;
}

export interface CreateShipmentPayload {
  code?: string;
  origin_location_id: string;
  destination_location_id: string;
  priority?: string;
  items: Array<{
    item_id: string;
    quantity: number;
  }>;
  vehicle_id?: string;
  route_id?: string;
  planned_departure_at?: string;
  planned_arrival_at?: string;
}

export interface RouteResponse {
  id: string;
  code: string;
  name: string;
  origin_location_id: string;
  destination_location_id: string;
  total_distance_km: number;
  total_travel_time_hours: number;
  status: string;
  base_risk_score: number;
  segments?: Array<{
    from_location_id: string;
    to_location_id: string;
    distance_km: number;
    travel_time_hours: number;
    terrain_risk: number;
    road_risk: number;
  }>;
}

export interface RouteOptimizationPayload {
  shipment_id?: string;
  origin_location_id: string;
  destination_location_id: string;
  total_weight_kg?: number;
  avoid_blocked_routes?: boolean;
}

export interface OptimizationJobResponse {
  job_id: string;
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  result?: {
    recommended_route_id: string;
    recommended_route_name: string;
    distance_km: number;
    travel_time_hours: number;
    risk_score: number;
    alternatives: Array<{
      route_id: string;
      route_name: string;
      distance_km: number;
      travel_time_hours: number;
      risk_score: number;
    }>;
  };
}

export const logisticsApi = {
  getVehicles: (): Promise<VehicleResponse[]> => {
    return apiClient.get<VehicleResponse[]>('/vehicles');
  },

  getVehicleById: (id: string): Promise<VehicleResponse> => {
    return apiClient.get<VehicleResponse>(`/vehicles/${id}`);
  },

  createVehicle: (payload: CreateVehiclePayload): Promise<VehicleResponse> => {
    return apiClient.post<VehicleResponse>('/vehicles', payload);
  },

  getShipments: (): Promise<ShipmentResponse[]> => {
    return apiClient.get<ShipmentResponse[]>('/shipments');
  },

  getShipmentById: (id: string): Promise<ShipmentResponse> => {
    return apiClient.get<ShipmentResponse>(`/shipments/${id}`);
  },

  createShipment: (payload: CreateShipmentPayload): Promise<ShipmentResponse> => {
    return apiClient.post<ShipmentResponse>('/shipments', payload);
  },

  getRoutes: (): Promise<RouteResponse[]> => {
    return apiClient.get<RouteResponse[]>('/routes');
  },

  getRouteById: (id: string): Promise<RouteResponse> => {
    return apiClient.get<RouteResponse>(`/routes/${id}`);
  },

  optimizeRoute: (payload: RouteOptimizationPayload): Promise<OptimizationJobResponse> => {
    return apiClient.post<OptimizationJobResponse>('/routes/optimize', payload);
  },

  getOptimizationJob: (jobId: string): Promise<OptimizationJobResponse> => {
    return apiClient.get<OptimizationJobResponse>(`/optimization/jobs/${jobId}`);
  },
};
