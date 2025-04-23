import type { AppProps } from "next/app";
import "../styles/global.css"
import "xp.css/dist/98.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
