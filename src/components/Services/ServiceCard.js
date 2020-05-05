import React, {useState} from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Container = styled.div`
  color: white;
  text-align: center;
  margin: 10px;
  overflow: hidden;

  position: relative;
  cursor: pointer;

  width: 220px;
  height: 220px;
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    font-size: 8em;
  }
  h3 {
    font-size: 2em;
    font-family: var(--font-main);
  }
  p {
    font-size: 1.25em;
    font-family: var(--font-main);
  }

  .card-side {
    position: absolute;
    left: 0; 
    transition: all .6s;
    width: 100%;
    height: 100%;
  }
`;

const CardFront = styled.div`
  top: ${props=>(props.active? '-220' : '0')}px;  
  opacity: ${props=>(props.active? '0' : '1')};  
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
`;

const CardBack = styled.div`
  top: ${props=>(props.active? '0' : '220')}px;
  background-color: rgba(0,0,0,.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default function ServiceCard(props) {

  let [active, setActive] = useState(false);

  return (
    <Container onClick={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
      <CardFront active={active} className="card-side">
        <FontAwesomeIcon className="icon" icon={props.service.icon} />
        <h3>{props.service.title}</h3>
      </CardFront>
      <CardBack active={active} className="card-side">
        <p>{props.service.text}</p>
      </CardBack>
    </Container>
  )
}