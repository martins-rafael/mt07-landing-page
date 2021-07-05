import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  min-height: 100%;
  background: url('/MT07-EU-Storm_Fluo-Action.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  h2 {
    font-size: 3rem;
    color: var(--white-01);
  }

  p {
    margin: 5rem 0;
    max-width: 600px;
    font-size: 1.5rem;
    color: var(--gray-01);
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    text-align: center;
    color: var(--white-02);
    background: linear-gradient(180deg, var(--gray-04), var(--black-01));
    border: none;
    border-radius: 8px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: var(--black-01);
      background: var(--white-02);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(20, 0, 0, 0.9);
  }
`;
