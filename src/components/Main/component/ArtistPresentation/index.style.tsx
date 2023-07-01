import { styled } from 'styled-components';

export const ArtistPresentationWrapper = styled.div`
  width: 100%;
  max-height: 25rem;
  display: flex;
  @media (width < 768px) {
    display: none;
  }

  .image__container {
    width: 30%;
    /* height: 100%; */
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay__image {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: inset -80px 0px 100px rgba(0, 0, 0, 0.8);
    }
  }

  .artist__infos {
    margin-left: 5rem;
    width: 50%;

    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
