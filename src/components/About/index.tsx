import Image from 'next/image';
import { Container } from './styles';

type AboutProps = {
  animation?: string;
};

export const About = ({ animation }: AboutProps) => (
  <Container>
    <div data-aos={animation}>
      <div>
        <h2>MT-07</h2>
        <p>
          For 2021, the next-generation MT-07 gets distinctive new bodywork with
          twin winglet-type air intakes and a compact new LED headlight, which
          projects a futuristic Y-shaped face – the signature style for the
          latest Hyper Naked models. Plus the refined EU5-compliant engine gives
          you even more linear response with a gutsier exhaust note.
        </p>
      </div>

      <Image
        src="/mt07_02.png"
        alt="MT-07"
        width={640}
        height={494}
        priority={true}
        layout="responsive"
      />
    </div>
  </Container>
);
