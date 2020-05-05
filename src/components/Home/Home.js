import React from 'react';


import FadeBlock from '../FadeBlock/FadeBlock';

import Landing from '../Landing/Landing';
import About from '../About/About';
import Services from '../Services/Services';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import Contact from '../Contact/Contact';
import ContactInfo from '../ContactInfo/ContactInfo';
import Clients from '../Clients/Clients';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';

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
        
        {/* I know having the API key exposed here is bad. I'm just short on time and wanted it */}
        <Map 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPuL3ma1hWgwyt3zirGxazZHABROjWyd0&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <ContactInfo />
      </FadeBlock>

      <Footer/>
      
    </div>
  )
}