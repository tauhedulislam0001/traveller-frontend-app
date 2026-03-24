import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "@redux/services/auth/api";
import { setCredentials } from "@redux/slices/authSlice";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "react-feather";

const Register: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tv_code: "",
    accept_terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

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
      
      .contact-hero {
        background: linear-gradient(135deg, ${themeColor} 0%, #d9232d 100%);
      }
      
      .floating-contact-card {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-top: 4px solid ${themeColor};
      }
      
      .contact-form-card {
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      }
      
      .dark .contact-form-card {
        background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
      }
      
      .accordion-item {
        transition: all 0.3s ease;
      }
      
      .accordion-item:hover {
        transform: translateX(5px);
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name) {
      newErrors.full_name = 'Full name is required';
    } else if (formData.full_name.length < 2) {
      newErrors.full_name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = 'Please confirm your password';
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }
    
    if (formData.tv_code && formData.tv_code.length !== 10) {
      newErrors.tv_code = 'TV code must be exactly 10 characters';
    }
    
    if (!formData.accept_terms) {
      newErrors.accept_terms = 'You must accept the terms and conditions';
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
      const result = await register({
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        ...(formData.tv_code && { tv_code: formData.tv_code }),
      }).unwrap();
      
      if (result.success && result.data) {
        dispatch(setCredentials({
          customer: result.data.customer,
          accessToken: result.data.access_token,
          refreshToken: result.data.refresh_token,
        }));
        
        toast.success('Registration successful! Welcome aboard!');
        router.push('/');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      
      if (error?.data?.errors) {
        setErrors(error.data.errors);
        toast.error('Please check your input');
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
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
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  {/* Full Name Field */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterName">
                      Your Name: <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="RegisterName" 
                      name="full_name"
                      type="text" 
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className={`mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                        errors.full_name ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                      } focus:ring-0 focus:border-red-500`}
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                    {errors.full_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterEmail">
                      Email Address: <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="RegisterEmail" 
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

                  {/* Password Field with Show/Hide */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterPassword">
                      Password: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-3">
                      <input 
                        id="RegisterPassword" 
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                          errors.password ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                        } focus:ring-0 focus:border-red-500`}
                        placeholder="Password (min. 8 characters)"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 inset-y-0 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Field with Show/Hide */}
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterConfirmPassword">
                      Confirm Password: <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-3">
                      <input 
                        id="RegisterConfirmPassword" 
                        name="password_confirmation"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.password_confirmation}
                        onChange={handleInputChange}
                        className={`w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border ${
                          errors.password_confirmation ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'
                        } focus:ring-0 focus:border-red-500`}
                        placeholder="Confirm your password"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 inset-y-0 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password_confirmation && (
                      <p className="text-red-500 text-xs mt-1">{errors.password_confirmation}</p>
                    )}
                  </div>

                  {/* Terms & Conditions */}
                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input 
                        className="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-red-600 checked:appearance-auto dark:accent-red-600 focus:border-red-300 focus:ring-0 focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50 me-2" 
                        type="checkbox" 
                        name="accept_terms"
                        checked={formData.accept_terms}
                        onChange={handleInputChange}
                        id="AcceptT&C"
                        disabled={isLoading}
                      />
                      <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">
                        I Accept <Link href="/terms" className="text-red-500 hover:underline">Terms And Condition</Link>
                      </label>
                    </div>
                    {errors.accept_terms && (
                      <p className="text-red-500 text-xs mt-1">{errors.accept_terms}</p>
                    )}
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
                          Registering...
                        </div>
                      ) : (
                        'Register'
                      )}
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account?</span> 
                    <Link href="/login" className="text-slate-900 dark:text-white font-bold inline-block hover:text-red-500 transition-colors">
                      Sign in
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

export default Register;