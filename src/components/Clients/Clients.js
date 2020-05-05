import React from 'react';
import styled from 'styled-components';

import logo_walmart from '../../images/logo_walmart.png';
import logo_bestbuy from '../../images/logo_bestbuy.png';
import logo_fleetfarm from '../../images/logo_fleetfarm.png';
import logo_clam from '../../images/logo_clam.png';
import logo_blackfish from '../../images/logo_blackfish.png';

const Container = styled.div``;

const ClientBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ClientCard = styled.img`
  width: 220px;
  height: auto;
  margin: 30px;

  transition: transform .2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const clientArray = [
  {
    name: 'Warlmart',
    logo: logo_walmart,
    website: 'https://www.walmart.com/'
  },
  {
    name: 'Bestbuy',
    logo: logo_bestbuy,
    website: 'https://www.bestbuy.com/'
  },
  {
    name: 'Fleet Farm',
    logo: logo_fleetfarm,
    website: 'https://www.fleetfarm.com/'
  },
  {
    name: 'Clam Outdoors',
    logo: logo_clam,
    website: 'https://clamoutdoors.com/'
  },
  {
    name: 'Blackfish Gear',
    logo: logo_blackfish,
    website: 'https://blackfishgear.com/'
  }
]



export default function Clients() {

  function renderClients() {
    return clientArray.map( (client,i)=>{
      return <a key={i} href={client.website} target="_blank" rel="noopener noreferrer"><ClientCard src={client.logo} alt={client.name}/></a>
    });
  }

  return (
    <Container>
      <h2>Our <span className="highlight">Clients</span></h2>
      <ClientBox>
        {renderClients()}
      </ClientBox>
    </Container>
  )
}