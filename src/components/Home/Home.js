import React from 'react';

import HomeLanding from './HomeLanding';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import FadeBlock from '../FadeBlock/FadeBlock';

import About from '../About/About';

import bkg_about from '../../images/bkg_about.jpg';

export default function Home() {

  return (
    <div>
      <HomeLanding />
      <FadeBlock myId="about" background={bkg_about} align="flex-start">
        <About />
      </FadeBlock>
    </div>
  )
}