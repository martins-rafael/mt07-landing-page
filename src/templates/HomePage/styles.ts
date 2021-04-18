import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translate(var(--position));
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;

  section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;

    img {
      z-index: 2;
      width: 100%;
      max-width: 640px;
      animation: ${appear} 1s;
      --position: -50px, 0;
    }

    > span {
      position: absolute;
      top: -5rem;
      font-size: 20rem;
      font-weight: bold;
      background: linear-gradient(var(--red), transparent);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${appear} 1s;
      --position: 0, -50px;

      @media (max-width: 970px) {
        font-size: 12rem;
        top: -3rem;
      }
    }

    h2 {
      font-size: 2rem;
      color: var(--white);
      animation: ${appear} 1s;
      --position: 50px, 0;

      span {
        font-size: 4rem;
        font-style: italic;
        color: var(--red);
      }
    }
  }
`;
