import { ReactElement, useEffect, useState } from 'react';
import {
  ArtistDescription,
  ArtistInfoContainer,
  ArtistPresentationWrapper,
  ArtistThumbail,
  ArtistThumbailContainer,
  ArtistTitle,
  ImageOverlay,
} from './index.style';
import { supabase } from '../../../../helpers/supabase';

interface Singer {
  created_at: string;
  description: string;
  id: string;
  name: string;
  thumbail_path: string;
}

export default function ArtistPresentation(): ReactElement {
  const [singer, getSinger] = useState<Singer>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase
        .from('singer')
        .select()
        .single();

      if (data) {
        getSinger(data);
      }
    };
    getData();
  }, []);

  return (
    <ArtistPresentationWrapper>
      <ArtistThumbailContainer>
        {singer && (
          <>
            <ArtistThumbail
              src={singer?.thumbail_path}
              alt="singer photo"
            />
            <ImageOverlay />
          </>
        )}
      </ArtistThumbailContainer>
      <ArtistInfoContainer>
        <ArtistTitle>{singer?.name}</ArtistTitle>
        <ArtistDescription>{singer?.description}</ArtistDescription>
      </ArtistInfoContainer>
    </ArtistPresentationWrapper>
  );
}
