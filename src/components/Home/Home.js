import React from 'react';

import HomeLanding from './HomeLanding';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import FadeBlock from '../FadeBlock/FadeBlock';

export default function Home() {

  return (
    <div>
      <HomeLanding />
      <FadeBlock myId="test">
        <h1>Hello, world.</h1>
      </FadeBlock>
    </div>
  )
}