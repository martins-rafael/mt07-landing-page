import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 6rem;
  height: 100%;

  > svg {
    font-size: 3rem;
    color: var(--red-01);
  }

  nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin: 1rem 0;
      font-size: 2rem;
      color: var(--gray-02);
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--red-02);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
    width: 100%;
    height: 5rem;

    nav {
      flex-direction: row;
      justify-content: flex-end;

      svg {
        margin: 0 1rem;
      }
    }
  }
`;
