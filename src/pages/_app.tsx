import { AppProps } from 'next/app';
import { Sidebar } from '../components/Sidebar';
import { GlobalStyles } from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Sidebar />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
