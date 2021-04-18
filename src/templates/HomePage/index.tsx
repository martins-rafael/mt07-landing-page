import Head from 'next/head';
import Image from 'next/image';
import { Container } from './styles';

export const HomePage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Container>
      <section>
        <Image
          src="/mt07.png"
          alt="MT-07"
          width={640}
          height={494}
          priority={true}
        />

        <span>MT-07</span>

        <h2>
          Master of <span>Torque</span>
        </h2>
      </section>
    </Container>
  </>
);
