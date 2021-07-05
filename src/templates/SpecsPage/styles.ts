import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translate(var(--position));
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

export const Container = styled.section`
  margin: 3rem auto;
  padding: 3rem 7rem;
  width: 100%;
  animation: ${appear} 1s;
  --position: -100px, 0;

  h1 {
    font-size: 7rem;
    background: linear-gradient(to right, var(--red-02) 0%, transparent 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  div {
    margin-top: 2rem;

    p {
      font-size: 1.125rem;
      letter-spacing: 1px;
      color: var(--gray-01);

      strong {
        color: var(--white-01);
      }

      & + p {
        margin-top: 1rem;
      }
    }
  }
`;
