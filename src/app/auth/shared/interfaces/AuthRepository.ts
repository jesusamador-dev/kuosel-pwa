import { AuthCredentials, AuthResponse, RegistrationData } from "@/app/auth/shared/interfaces/AuthInterfaces";

export interface IAuthRepository {
  /**
   * Authenticate a user with username and password.
   * @param credentials The credentials for login.
   * @returns A promise that resolves to the authentication response.
   */
  login(credentials: AuthCredentials): Promise<AuthResponse>;

  /**
   * Register a new user with necessary details.
   * @param data The registration data.
   * @returns A promise that resolves to the authentication response upon successful registration.
   */
  register(data: RegistrationData): Promise<AuthResponse>;

  /**
   * Logs out the current user.
   * @returns A promise that resolves when the logout process is complete.
   */
  logout(): Promise<void>;

  /**
   * Refresh the authentication tokens.
   * @param refreshToken The refresh token provided during login or previous refresh.
   * @returns A promise that resolves to the new authentication response.
   */
  refreshToken?(refreshToken: string): Promise<AuthResponse>;

  /**
   * Optional: Change the user's password.
   * @param currentPassword The current password for verification.
   * @param newPassword The new password to set.
   * @returns A promise that resolves when the password is changed.
   */
  changePassword?(currentPassword: string, newPassword: string): Promise<void>;

  /**
   * Confirms a user's identity using a One-Time Password (OTP) sent to the user.
   * This is typically used for verifying the user's email address or phone number.
   * @param otp The one-time password provided by the user.
   * @returns A promise that resolves to the authentication response upon successful verification.
   */
  confirmOtp(otp: string): Promise<AuthResponse>;

  /**
   * Resends the One-Time Password (OTP) to the user's email or phone number.
   * This is useful in case the user did not receive the first OTP or the OTP has expired.
   * @param username The email or phone number where the OTP should be resent.
   * @returns A promise that resolves when the OTP has been successfully resent.
   */
  resendOtp(username: string): Promise<void>;
}
