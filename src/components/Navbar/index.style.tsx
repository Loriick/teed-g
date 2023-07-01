import { styled } from 'styled-components';

export const NavBarWrapper = styled.nav`
  grid-area: navbar;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;

  > form {
    display: content;
    width: 70%;
    margin-right: auto;

    > input {
      width: 100%;
      outline: none;
      border: none;
      padding: 1.2rem 2rem;
      border-radius: 5rem;
      font-size: 1.4rem;
    }
  }

  .icon__container {
    width: 20%;
    display: flex;
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    > svg {
      cursor: pointer;

      &:first-child {
        margin-right: 1.4rem;
      }
    }
  }
`;
