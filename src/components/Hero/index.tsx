import Image from 'next/dist/client/image';

import { Container } from './styles';

export const Hero = () => (
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
);
