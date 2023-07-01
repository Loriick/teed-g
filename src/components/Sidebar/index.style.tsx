import { styled } from 'styled-components';

export const SidebarWrapper = styled('aside')`
  grid-area: sidebar;
  padding: 1.6rem 2.4rem;
  border-right: 1px solid #fff;

  @media (width < 768px) {
    display: none;
  }

  div.logo {
    width: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    font-size: 2.4rem;

    > p {
      margin-left: 1.4rem;
    }
  }

  nav.sidebar__nav {
    margin-top: 4rem;
    width: 100%;

    a {
      font-weight: 600;
      font-size: 2.2rem;
      transition: color 0.2s ease-in;
    }

    a:first-child {
      margin-bottom: 2rem;
    }

    a:hover {
      color: orangered;
    }
  }
`;
