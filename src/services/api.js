import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      Cookies.remove('access_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API interfaces
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: string;
  specialty?: string;
  license_number?: string;
}

export interface CaseCreateRequest {
  patient_id: string;
  patient_age?: number;
  patient_gender?: string;
  chief_complaint: string;
  diagnosis?: string;
  treatment_plan?: string;
  priority: string;
}

export interface CaseUpdateRequest {
  patient_age?: number;
  patient_gender?: string;
  chief_complaint?: string;
  diagnosis?: string;
  treatment_plan?: string;
  status?: string;
  priority?: string;
}

export interface SOAPGenerateRequest {
  case_id: string;
  additional_notes?: string;
}

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/api/auth/login', { username: email, password }),
  
  register: (userData: RegisterRequest) =>
    api.post('/api/auth/register', userData),
  
  getCurrentUser: () =>
    api.get('/api/auth/me'),
  
  refreshToken: () =>
    api.post('/api/auth/refresh'),
  
  logout: () =>
    api.post('/api/auth/logout'),
};

// Cases API
export const casesAPI = {
  getCases: (params?: { skip?: number; limit?: number; status?: string; priority?: string }) =>
    api.get('/api/cases', { params }),
  
  getCase: (id: string) =>
    api.get(`/api/cases/${id}`),
  
  createCase: (caseData: CaseCreateRequest) =>
    api.post('/api/cases', caseData),
  
  updateCase: (id: string, caseData: CaseUpdateRequest) =>
    api.put(`/api/cases/${id}`, caseData),
  
  deleteCase: (id: string) =>
    api.delete(`/api/cases/${id}`),
  
  closeCase: (id: string) =>
    api.post(`/api/cases/${id}/close`),
};

// SOAP Notes API
export const soapAPI = {
  generateSOAP: (request: SOAPGenerateRequest) =>
    api.post('/api/soap/generate', request),
  
  getCaseSOAPNotes: (caseId: string) =>
    api.get(`/api/soap/case/${caseId}`),
  
  getSOAPNote: (id: string) =>
    api.get(`/api/soap/${id}`),
  
  reviewSOAPNote: (id: string, reviewNotes?: string) =>
    api.post(`/api/soap/${id}/review`, { review_notes: reviewNotes }),
  
  deleteSOAPNote: (id: string) =>
    api.delete(`/api/soap/${id}`),
};

// Files API
export const filesAPI = {
  uploadFile: (file: File, caseId?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    if (caseId) {
      formData.append('case_id', caseId);
    }
    return api.post('/api/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  listFiles: (caseId?: string) =>
    api.get('/api/files/list', { params: { case_id: caseId } }),
  
  deleteFile: (filename: string) =>
    api.delete(`/api/files/${filename}`),
};

// Analytics API
export const analyticsAPI = {
  getDashboard: () =>
    api.get('/api/analytics/dashboard'),
  
  getCaseTrends: (days: number = 30) =>
    api.get('/api/analytics/cases/trends', { params: { days } }),
  
  getSOAPAnalytics: () =>
    api.get('/api/analytics/soap/analytics'),
  
  getPerformanceMetrics: () =>
    api.get('/api/analytics/performance'),
};

export default api; 