import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation_Bar from '../../components/navigation_bar';

export default function App({ Component, pageProps }: AppProps) {
  return (
<>
<Navigation_Bar/>
<Component {...pageProps} />;
</>
  )
}
