export interface AuthCredentials {
  username: string;
  password: string;
}

export interface RegistrationData extends AuthCredentials {
  email: string;
  additionalAttributes: AdditionalAttributes;
}

export interface AdditionalAttributes {
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}