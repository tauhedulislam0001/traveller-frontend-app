import { Footer } from "@components/footer";
import { Header } from "@components/header";
import store from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
