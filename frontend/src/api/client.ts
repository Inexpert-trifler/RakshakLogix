const API_BASE_URL = ((import.meta as any).env?.VITE_API_BASE_URL as string) || 'http://localhost:8000/api/v1';

export interface ApiErrorPayload {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    request_id?: string;
  };
}

export class ApiError extends Error {
  code: string;
  status: number;
  details?: Record<string, any>;
  requestId?: string;

  constructor(message: string, status: number, code: string = 'UNKNOWN_ERROR', details?: Record<string, any>, requestId?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
    this.requestId = requestId;
  }
}

export function getAuthToken(): string | null {
  return localStorage.getItem('rl_token');
}

export function setAuthToken(token: string | null): void {
  if (token) {
    localStorage.setItem('rl_token', token);
  } else {
    localStorage.removeItem('rl_token');
  }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const token = getAuthToken();

  const headers: Record<string, string> = {
    'Accept': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token && !headers['Authorization']) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (options.body && !(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    setAuthToken(null);
    localStorage.setItem('rl_auth', 'false');
    // Dispatch unauthenticated event
    window.dispatchEvent(new CustomEvent('rl_unauthorized'));
  }

  let data: any = null;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = text ? { message: text } : null;
  }

  if (!response.ok) {
    const errObj = data?.error || {};
    const code = errObj.code || `HTTP_${response.status}`;
    const message = errObj.message || data?.message || data?.detail || `API request failed with status ${response.status}`;
    throw new ApiError(message, response.status, code, errObj.details, errObj.request_id);
  }

  return data as T;
}

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestInit) => request<T>(endpoint, { method: 'GET', ...options }),
  post: <T>(endpoint: string, body?: any, options?: RequestInit) =>
    request<T>(endpoint, {
      method: 'POST',
      body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
      ...options,
    }),
  patch: <T>(endpoint: string, body?: any, options?: RequestInit) =>
    request<T>(endpoint, {
      method: 'PATCH',
      body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
      ...options,
    }),
  delete: <T>(endpoint: string, options?: RequestInit) => request<T>(endpoint, { method: 'DELETE', ...options }),
};
