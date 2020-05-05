import React from 'react';

import HomeLanding from './HomeLanding';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import FadeBlock from '../FadeBlock/FadeBlock';

import About from '../About/About';
import Services from '../Services/Services';

import bkg_about from '../../images/bkg_about.jpg';
import bkg_services from '../../images/bkg_services.jpg';
import bkg_instagram from '../../images/bkg_instagram.jpg';

export default function Home() {

  return (
    <div>
      <HomeLanding />

      <FadeBlock myId="about" background={bkg_about} align="flex-start">
        <About />
      </FadeBlock>

      <FadeBlock myId="services" background={bkg_services} align="center">
        <Services />
      </FadeBlock>

      <FadeBlock myId="instagram" background={bkg_instagram} align="center">
        <InstagramFeed />
      </FadeBlock>
    </div>
  )
}