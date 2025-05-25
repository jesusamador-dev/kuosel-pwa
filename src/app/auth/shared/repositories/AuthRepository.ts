import { IAuthRepository } from '@/app/auth/shared/interfaces/AuthRepository';
import { AuthCredentials, RegistrationData, AuthResponse } from '@/app/auth/shared/interfaces/AuthInterfaces';
import { HttpApiGateway } from '@/domain/interfaces/HttpApiGateway';

export class AuthRepository implements IAuthRepository {
  constructor(private apiGateway: HttpApiGateway) { }

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await this.apiGateway.post<AuthResponse>('/login', credentials);
    return response;
  }

  async register(data: RegistrationData): Promise<AuthResponse> {
    const response = await this.apiGateway.post<AuthResponse>('/register', data);
    return response;
  }

  async logout(): Promise<void> {
    // Logout lógica
  }

  async confirmOtp(otp: string): Promise<AuthResponse> {
    const response = await this.apiGateway.post<AuthResponse>('/confirm', { otp });
    return response;
  }

  async resendOtp(email: string): Promise<void> {
    await this.apiGateway.post<void>('/resend-confirmation', { email });
  }
}
