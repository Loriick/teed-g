import { styled } from 'styled-components';

export const ArtistPresentationWrapper = styled.div`
  width: 100%;
  max-height: 25rem;
  display: flex;
  @media (width < 768px) {
    flex-direction: column;
    height: 50%;
    max-height: unset;
  }
`;

export const ArtistThumbailContainer = styled.div`
  width: 30%;
  /* height: 100%; */
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  @media (width < 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ArtistThumbail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-shadow: inset -80px 0px 100px rgba(0, 0, 0, 0.8);
  @media screen and (width < 768px) {
    box-shadow: inset -80px 0px 100px rgba(0, 0, 0, 0.5);
  }
`;

export const ArtistInfoContainer = styled.div`
  margin-left: 5rem;
  width: 50%;
  @media screen and (width < 768px) {
    margin-left: unset;
    width: 100%;
  }
`;

export const ArtistTitle = styled.h1`
  font-size: 3rem;
`;

export const ArtistDescription = styled.p`
  font-size: 1.4rem;
`;
