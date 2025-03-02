import axios, { AxiosInstance } from 'axios';
import { HttpApiGateway } from '@/app/shared/infraestructure/interfaces/HttpApiGateway';

class AxiosGateway implements HttpApiGateway {
  private static instance: AxiosGateway;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.kuosel.com/v1',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): AxiosGateway {
    if (!AxiosGateway.instance) {
      AxiosGateway.instance = new AxiosGateway();
    }
    return AxiosGateway.instance;
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params });
    return response.data;
  }

  public async post<T>(url: string, data?: object): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data?: object): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url);
    return response.data
  }
}

export const axiosGateway = AxiosGateway.getInstance();
