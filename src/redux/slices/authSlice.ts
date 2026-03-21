import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../services/auth/type';

export interface AuthState {
  isAuthenticated: boolean;
  customer: Customer | null;
  accessToken: string | null;
  refreshToken: string | null;
}

// Initialize state from localStorage (client-side only)
const getInitialState = (): AuthState => {
  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const customerStr = localStorage.getItem('customer');
    
    console.log('Initializing auth from localStorage:', { accessToken, customerStr });
    
    if (accessToken && customerStr) {
      try {
        const customer = JSON.parse(customerStr);
        return {
          isAuthenticated: true,
          customer,
          accessToken,
          refreshToken,
        };
      } catch (e) {
        console.error('Failed to parse customer data', e);
      }
    }
  }
  
  return {
    isAuthenticated: false,
    customer: null,
    accessToken: null,
    refreshToken: null,
  };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{
      customer: Customer;
      accessToken: string;
      refreshToken: string;
    }>) => {
      console.log('setCredentials called with:', action.payload);
      
      state.isAuthenticated = true;
      state.customer = action.payload.customer;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      
      // Also save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', action.payload.accessToken);
        localStorage.setItem('refresh_token', action.payload.refreshToken);
        localStorage.setItem('customer', JSON.stringify(action.payload.customer));
        
        console.log('Saved to localStorage');
      }
    },
    clearCredentials: (state) => {
      console.log('clearCredentials called');
      
      state.isAuthenticated = false;
      state.customer = null;
      state.accessToken = null;
      state.refreshToken = null;
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('customer');
        
        console.log('Cleared localStorage');
      }
    },
    updateCustomer: (state, action: PayloadAction<Partial<Customer>>) => {
      if (state.customer) {
        state.customer = { ...state.customer, ...action.payload };
        // Update localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('customer', JSON.stringify(state.customer));
        }
      }
    },
  },
});

export const { setCredentials, clearCredentials, updateCustomer } = authSlice.actions;
export default authSlice.reducer;