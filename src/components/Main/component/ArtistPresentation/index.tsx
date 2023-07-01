import { ReactElement, useEffect, useState } from 'react';
import { ArtistPresentationWrapper } from './index.style';
import { supabase } from '../../../../recoil/selectors/songs';

interface Singer {
  created_at: string;
  description: string;
  id: string;
  name: string;
  thumbail_path: string;
}

export default function ArtistPresentation(): ReactElement {
  const [singer, getSinger] = useState<any>();

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
      <div className="image__container">
        {singer && (
          <img src={singer?.thumbail_path} alt="singer photo" />
        )}
        <div className="overlay__image"></div>
      </div>
      <div className="artist__infos">
        <h1>{singer?.name}</h1>
        <p>{singer?.description}</p>
      </div>
    </ArtistPresentationWrapper>
  );
}
