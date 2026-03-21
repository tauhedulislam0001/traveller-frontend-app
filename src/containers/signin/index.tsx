import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@redux/services/auth/api";
import { setCredentials } from "@redux/slices/authSlice";
import toast from "react-hot-toast";

const Signin: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    tv_code: "",
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [login, { isLoading }] = useLoginMutation();

  // Theme color
  const themeColor = "#fb2c36";

  useEffect(() => {
    setIsMounted(true);
    
    // Add CSS to make navbar text black
    const style = document.createElement('style');
    style.textContent = `
      nav.is-sticky .navigation-menu a {
        color: #fff !important;
      }
      
      nav.is-sticky .navigation-menu a:hover {
        color: #fb2c36 !important;
      }
      
      nav.is-sticky .logo img:not(.dark:inline-block) {
        filter: brightness(0) !important;
      }
      
      nav.is-sticky .dropdown-menu {
        background-color: #000 !important;
        border-color: #333 !important;
      }
      
      nav.is-sticky .dropdown-menu a {
        color: #fff !important;
      }
      
      nav.is-sticky .dropdown-menu a:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      nav.is-sticky .dropdown-item {
        color: #fff !important;
      }
      
      nav.is-sticky .dropdown-item:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      nav.is-sticky .sub-menu,
      nav.is-sticky .submenu,
      nav.is-sticky .dropdown-content,
      nav.is-sticky .menu-dropdown {
        background-color: #000 !important;
        color: #fff !important;
      }
      
      nav.is-sticky .sub-menu a,
      nav.is-sticky .submenu a,
      nav.is-sticky .dropdown-content a,
      nav.is-sticky .menu-dropdown a {
        color: #fff !important;
      }
      
      nav.is-sticky .sub-menu a:hover,
      nav.is-sticky .submenu a:hover,
      nav.is-sticky .dropdown-content a:hover,
      nav.is-sticky .menu-dropdown a:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      nav.is-sticky .dropdown-toggle::after {
        border-top-color: #fff !important;
      }
      
      nav.is-sticky .dropdown-menu::before {
        border-bottom-color: #333 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.tv_code && formData.tv_code.length !== 10) {
      newErrors.tv_code = 'TV code must be exactly 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      const result = await login({
        email: formData.email,
        password: formData.password,
        ...(formData.tv_code && { tv_code: formData.tv_code }),
      }).unwrap();
      
      if (result.success && result.data) {
        // Save to Redux store
        dispatch(setCredentials({
          customer: result.data.customer,
          accessToken: result.data.access_token,
          refreshToken: result.data.refresh_token,
        }));
        
        // Show success message
        toast.success('Login successful!');
        
        // Redirect to home or dashboard
        router.push('/');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Handle validation errors from backend
      if (error?.data?.errors) {
        setErrors(error.data.errors);
        toast.error('Please check your input');
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-2" id="particles-snow"></div>
        <div className="container relative z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <Link href="/">
                <img 
                  src="assets/images/logo-dark.png" 
                  className="mx-auto" 
                  alt="Logo"
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  {/* Email Field */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address: <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="LoginEmail" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                        errors.email ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                      } focus:ring-0 focus:border-red-500`}
                      placeholder="name@example.com"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Password: <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="LoginPassword" 
                      name="password"
                      type="password" 
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                        errors.password ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                      } focus:ring-0 focus:border-red-500`}
                      placeholder="Password:"
                      disabled={isLoading}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* TV Code Field (Optional - for extra security) */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="TvCode">
                      TV Code (Optional):
                    </label>
                    <input 
                      id="TvCode" 
                      name="tv_code"
                      type="text" 
                      value={formData.tv_code}
                      onChange={handleInputChange}
                      className={`mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                        errors.tv_code ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                      } focus:ring-0 focus:border-red-500`}
                      placeholder="Enter TV code (if required)"
                      disabled={isLoading}
                      maxLength={10}
                    />
                    {errors.tv_code && (
                      <p className="text-red-500 text-xs mt-1">{errors.tv_code}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-1">
                      Optional: Enter your TV code for additional security
                    </p>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center mb-0">
                      <input 
                        className="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-red-600 checked:appearance-auto dark:accent-red-600 focus:border-red-300 focus:ring-0 focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50 me-2" 
                        type="checkbox" 
                        name="remember"
                        checked={formData.remember}
                        onChange={handleInputChange}
                        id="RememberMe"
                        disabled={isLoading}
                      />
                      <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">
                        Remember me
                      </label>
                    </div>
                    <p className="text-red-500 mb-0">
                      <Link href="/forgot-password" className="text-red-500 hover:underline">
                        Forgot password?
                      </Link>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="mb-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer hover:bg-red-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Logging in...
                        </div>
                      ) : (
                        'Login'
                      )}
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <span className="text-slate-400 me-2">Don't have an account?</span> 
                    <Link href="/signup" className="text-slate-900 dark:text-white font-bold inline-block hover:text-red-500 transition-colors">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;