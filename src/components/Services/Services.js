import React from 'react';
import styled from 'styled-components';

import {faSearch, faGlobe, faCoins, faPaintBrush, faEnvelope, faCamera, faPlayCircle} from '@fortawesome/free-solid-svg-icons';

import ServiceCard from './ServiceCard';

const Container = styled.div`
  .tagline {
    margin: 0 auto;
  }
`;

const ServiceList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const services = [
  {
    title: 'SEO',
    text: 'The only good website is a website that gets seen.',
    icon: faSearch
  },
  {
    title: 'Website',
    text: 'We craft websites to fit you and your business.',
    icon: faGlobe
  },
  {
    title: 'Ecommerce',
    text: 'Customers need products, you need business.',
    icon: faCoins
  },
  {
    title: 'Graphic Design',
    text: 'Our team of designers will work with you to define your visual branding.',
    icon: faPaintBrush
  },
  {
    title: 'Email Marketing',
    text: 'We help you connect meaningfully with you customers.',
    icon: faEnvelope
  },
  {
    title: 'Photography',
    text: `A picture says a thousand words. We'll find the one that says it right.`,
    icon: faCamera
  },
  {
    title: 'Videography',
    text: `Our videography team will help tell your story to your customers.`,
    icon: faPlayCircle
  }
];



export default function Services() {

  function renderServices() {
    return services.map( (service, i)=>{
      return <ServiceCard key={i} service={service} />
    });
  }

  return (
    <Container>
      <h2>Q: <span className="highlight">What</span> do we do?</h2>
      <p className="tagline">A: a little bit of everything.</p>
      <ServiceList>
        {renderServices()}
      </ServiceList>
    </Container>
  )
}