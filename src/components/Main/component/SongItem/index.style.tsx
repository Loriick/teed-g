import { styled } from 'styled-components';

export const SongItemWrapper = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  overflow: hidden;

  height: 80px;
  border-radius: 0;
  margin-bottom: 1.4rem;
  @media only screen and (min-width: 768px) {
    transition: background-color 0.3s ease-in;
    cursor: pointer;
    border-radius: 0.8rem;
    height: 50px;

    &:hover {
      background-color: rgba(198, 210, 209, 0.5);
    }
  }

  .cover__container {
    width: 5%;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    @media only screen and (max-width: 768px) {
      height: 100%;
      width: unset;
    }

    > img {
      width: 40px;
      height: 40px;
      transition: border-radius 0.4s ease-in;
      @media only screen and (max-width: 768px) {
        width: 80px;
        height: 100%;
      }
    }
    &.active > img {
      border-radius: 50%;
      animation: animateCover infinite linear 10s;

      @media only screen and (max-width: 768px) {
        animation: unset;
        height: 100%;
        border-radius: 0;
      }
    }
  }

  @keyframes animateCover {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .title {
    flex-grow: 1;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 768px) {
      width: 90%;
    }
  }

  .action {
    width: 5%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
