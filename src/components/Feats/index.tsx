import Link from 'next/link';
import { BsSlashSquareFill as Square } from 'react-icons/bs';

import { Container } from './styles';

type FeatsProps = {
  animation?: string;
};

export const Feats = ({ animation }: FeatsProps) => {
  const features = [
    'Next-generation design',
    'LED projector lighting',
    '690cc 2-cylinder engine',
    'Latest-generation tyres',
    'LED indicators',
    'Inverted LCD meter',
  ];

  return (
    <Container>
      <h2>
        Embrace Your <span>Dark Side</span>
      </h2>

      <ul>
        {features.map((feat) => (
          <li data-aos={animation} key={feat}>
            <Square />
            {feat}
          </li>
        ))}
      </ul>

      <Link href="/specs">
        <a title="Specs">See Full Features</a>
      </Link>
    </Container>
  );
};
