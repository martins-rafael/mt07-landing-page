import Head from 'next/head';
import { Container } from './styles';
import { content } from './content';

export const SpecsPage = () => {
  const specs = Object.keys(content);

  return (
    <>
      <Head>
        <title>Specs</title>
      </Head>

      <Container>
        <h1>SPECS</h1>

        <div>
          {specs.map((item) => (
            <p key={item}>
              <strong>{item}: </strong>
              {content[item]}
            </p>
          ))}
        </div>
      </Container>
    </>
  );
};
