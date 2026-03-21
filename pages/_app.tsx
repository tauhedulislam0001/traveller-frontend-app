import { Footer } from "@components/footer";
import { Header } from "@components/header";
import store from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      {mounted ? (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      )}
    </Provider>
  );
}

export default MyApp;