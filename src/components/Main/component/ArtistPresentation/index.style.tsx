import { styled } from 'styled-components';

export const ArtistPresentationWrapper = styled.div`
  width: 100%;
  max-height: 25rem;
  display: flex;
  @media (width < 768px) {
    display: none;
  }
`;

export const ArtistThumbailContainer = styled.div`
  width: 30%;
  /* height: 100%; */
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
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
`;

export const ArtistInfoContainer = styled.div`
  margin-left: 5rem;
  width: 50%;
`;

export const ArtistTitle = styled.h1`
  font-size: 3rem;
`;

export const ArtistDescription = styled.p`
  font-size: 1.4rem;
`;
