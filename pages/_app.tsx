import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/Home.module.css";
import "../styles/reset.css";
import "../src/component/404/notfound.styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
