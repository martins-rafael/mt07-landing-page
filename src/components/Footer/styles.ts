import styled from 'styled-components';

export const Container = styled.footer`
  padding: 10rem 6rem 3rem;
  color: var(--white-02);
  background: var(--black-02);

  @media (max-width: 768px) {
    padding: 3rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1400px;
    font-size: 1.25rem;

    @media (max-width: 970px) {
      flex-direction: column;
    }

    svg {
      margin-bottom: 1rem;
      font-size: 1.5rem;

      & + svg {
        margin-left: 1rem;
      }
    }

    p,
    a {
      margin-bottom: 0.5rem;

      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }
    }

    a {
      display: block;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin-top: 5rem;
    font-size: 1.125rem;
    text-align: center;
  }
`;
