import React from 'react';


import FadeBlock from '../FadeBlock/FadeBlock';

import Landing from '../Landing/Landing';
import About from '../About/About';
import Services from '../Services/Services';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import Contact from '../Contact/Contact';
import Clients from '../Clients/Clients';

import bkg_about from '../../images/bkg_about.jpg';
import bkg_services from '../../images/bkg_services.jpg';
import bkg_instagram from '../../images/bkg_instagram.jpg';
import bkg_contact from '../../images/bkg_contact.jpg';
import bkg_clients from '../../images/bkg_clients.jpg';

export default function Home() {

  return (
    <div>
      <Landing />

      <FadeBlock myId="about" background={bkg_about} align="center">
        <About />
      </FadeBlock>

      <FadeBlock myId="services" background={bkg_services} align="center">
        <Services />
      </FadeBlock>

      <FadeBlock myId="clients" background={bkg_clients} align="center">
        <Clients />
      </FadeBlock>

      <FadeBlock myId="instagram" background={bkg_instagram} align="center">
        <InstagramFeed />
      </FadeBlock>

      <FadeBlock myId="contact" background={bkg_contact} align="center">
        <Contact />
      </FadeBlock>
    </div>
  )
}