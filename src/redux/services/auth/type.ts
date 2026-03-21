// Customer Type
export type Customer = {
  id: number;
  full_name: string;
  email: string;
  tv_code?: string;
  occupation?: string;
  description?: string;
  billing_address?: string;
  shipping_address?: string;
  mobile?: string;
  website_url?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  company_name?: string;
  profile_image?: string | null;
  status?: number;
  can_login?: number;
  last_login_at?: string;
  created_at?: string;
  updated_at?: string;
};

// Register
export type RegisterRequest = {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  tv_code?: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data?: {
    customer: Customer;
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  };
  errors?: any;
};

// Login
export type LoginRequest = {
  email: string;
  password: string;
  tv_code?: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data?: {
    customer: Customer;
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  };
  errors?: any;
};

// Refresh Token
export type RefreshTokenRequest = {
  refresh_token: string;
};

export type RefreshTokenResponse = {
  success: boolean;
  message: string;
  data?: {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  };
};

// Profile
export type ProfileResponse = {
  success: boolean;
  data: {
    customer: Customer;
  };
};

// Update Profile
export type UpdateProfileRequest = Partial<Omit<Customer, 'id' | 'created_at' | 'updated_at'>>;

export type UpdateProfileResponse = {
  success: boolean;
  message: string;
  data?: {
    customer: Customer;
  };
  errors?: any;
};

// Change Password
export type ChangePasswordRequest = {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

export type ChangePasswordResponse = {
  success: boolean;
  message: string;
  errors?: any;
};

// Verify TV Code
export type VerifyTvCodeRequest = {
  tv_code: string;
};

export type VerifyTvCodeResponse = {
  success: boolean;
  message: string;
};

// Upload Profile Image
export type UploadProfileImageResponse = {
  success: boolean;
  message: string;
  data: {
    profile_image: string;
  };
};

// Logout
export type LogoutResponse = {
  success: boolean;
  message: string;
};

// Auth State
export type AuthState = {
  isAuthenticated: boolean;
  customer: Customer | null;
  accessToken: string | null;
  refreshToken: string | null;
};