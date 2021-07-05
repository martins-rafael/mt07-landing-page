import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background: var(--white-02);

  @media (max-width: 768px) {
    padding: 3rem;
  }

  > div {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    color: var(--red-01);
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: var(--gray-02);
    line-height: 1.5;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    height: 50%;
    background: inherit;
    backface-visibility: hidden; // for Chrome Windows
    -webkit-backface-visibility: hidden;
    transform: skewY(4deg);
    transform-origin: 100% 0;
  }
`;
