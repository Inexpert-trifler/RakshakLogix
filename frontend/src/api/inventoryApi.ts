import { apiClient } from './client';

export interface ItemResponse {
  id: string;
  code: string;
  name: string;
  category: string;
  unit_of_measure: string;
  criticality: string;
  weight_kg_per_unit?: number;
  volume_m3_per_unit?: number;
  created_at: string;
}

export interface InventoryResponse {
  id: string;
  location_id: string;
  item_id: string;
  quantity: number;
  reserved_quantity: number;
  available_quantity: number;
  safety_stock: number;
  reorder_point: number;
  max_capacity: number;
  last_updated_at: string;
  location_name?: string;
  item_name?: string;
  item_code?: string;
  item_category?: string;
}

export interface TransactionPayload {
  location_id: string;
  item_id: string;
  transaction_type: 'RECEIPT' | 'ISSUE' | 'TRANSFER' | 'ADJUSTMENT' | 'RESERVATION' | 'RELEASE';
  quantity: number;
  reference_number?: string;
  destination_location_id?: string;
  notes?: string;
}

export interface TransactionResponse {
  id: string;
  location_id: string;
  item_id: string;
  transaction_type: string;
  quantity: number;
  balance_after: number;
  reference_number?: string;
  timestamp: string;
}

export interface InventoryRiskItem {
  inventory_id: string;
  location_id: string;
  location_name: string;
  item_id: string;
  item_name: string;
  current_quantity: number;
  safety_stock: number;
  estimated_daily_consumption: number;
  runway_days: number;
  risk_level: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  projected_stockout_date?: string;
}

export const inventoryApi = {
  getItems: (): Promise<ItemResponse[]> => {
    return apiClient.get<ItemResponse[]>('/inventory/items');
  },

  list: (locationId?: string, itemId?: string): Promise<InventoryResponse[]> => {
    const params = new URLSearchParams();
    if (locationId) params.append('location_id', locationId);
    if (itemId) params.append('item_id', itemId);
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<InventoryResponse[]>(`/inventory${query}`);
  },

  getById: (id: string): Promise<InventoryResponse> => {
    return apiClient.get<InventoryResponse>(`/inventory/${id}`);
  },

  createTransaction: (payload: TransactionPayload): Promise<TransactionResponse> => {
    return apiClient.post<TransactionResponse>('/inventory/transactions', payload);
  },

  getRisk: (): Promise<InventoryRiskItem[]> => {
    return apiClient.get<InventoryRiskItem[]>('/inventory/risk');
  },
};
