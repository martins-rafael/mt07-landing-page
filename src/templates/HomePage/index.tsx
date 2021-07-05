import Head from 'next/head';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Hero } from '../../components/Hero';
import { Feats } from '../../components/Feats';
import { About } from '../../components/About';
import { TestRide } from '../../components/TestRide';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
      <Feats animation="fade-right" />
      <About animation="fade-down" />
      <TestRide />
      <Footer />
    </>
  );
};
