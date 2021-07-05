import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem 10rem;
  min-height: 100vh;
  background: var(--red-02);

  h2 {
    font-size: 3rem;
    color: var(--white-01);

    span {
      font-size: 3.5rem;
      color: var(--gray-04);
    }

    @media (max-width: 768px) {
      font-size: 2rem;

      span {
        font-size: 2.5rem;
      }
    }
  }

  ul {
    margin: 4rem auto;
    width: 100%;
    max-width: 640px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 2rem;
      color: var(--white-02);

      & + li {
        margin-top: 6rem;
      }

      @media (max-width: 768px) {
        font-size: 1.5rem;

        & + li {
          margin-top: 3rem;
        }
      }

      svg {
        margin-right: 1rem;
        font-size: 1.25rem;
        color: var(--gray-01);
      }
    }
  }

  a {
    padding: 1rem 2rem;
    font-size: 2rem;
    text-align: center;
    color: var(--white-02);
    background: linear-gradient(180deg, var(--red-01), #d52b1e55);
    border-radius: 8px;
    transition: filter 0.2s ease-in-out;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    &:hover {
      filter: brightness(1.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    height: 50%;
    background: inherit;
    backface-visibility: hidden; // for Chrome Windows
    -webkit-backface-visibility: hidden;
    transform: skewY(4deg);
    transform-origin: 100% 0;
  }
`;
