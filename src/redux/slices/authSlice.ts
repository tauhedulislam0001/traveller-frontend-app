import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Customer } from '../services/auth/type';

const initialState: AuthState = {
  isAuthenticated: false,
  customer: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{
      customer: Customer;
      accessToken: string;
      refreshToken: string;
    }>) => {
      state.isAuthenticated = true;
      state.customer = action.payload.customer;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearCredentials: (state) => {
      state.isAuthenticated = false;
      state.customer = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    updateCustomer: (state, action: PayloadAction<Partial<Customer>>) => {
      if (state.customer) {
        state.customer = { ...state.customer, ...action.payload };
      }
    },
  },
});

export const { setCredentials, clearCredentials, updateCustomer } = authSlice.actions;
export default authSlice.reducer;