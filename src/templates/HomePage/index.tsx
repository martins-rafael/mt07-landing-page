import Head from 'next/head';
import { Container } from './styles';

export const HomePage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Container>
      <section>
        <img src="/mt07.png" alt="MT-07" />

        <span>MT-07</span>

        <h2>
          Master of <span>Torque</span>
        </h2>
      </section>
    </Container>
  </>
);
