import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import getOffsetTop from '../../modules/getOffsetTop';

const Container = styled.div`
  background-image: url(${props=>props.background});
  background-size: cover;
  background-attachment: fixed;

  min-height: 50vh;
  display: flex;
  justify-content: ${props=>props.align};
  align-items: center;

  position: relative;
`;

const Content = styled.div`
  opacity: ${props=>(props.active? '1' : '0')};
  top: ${props=>(props.active? '0' : '-50')}px;

  transition: opacity .5s, top 1s;
  padding: 64px;
  position: relative;
  width: 100%;

  h2 {
    text-align: center;
    font-family: var(--font-title);
    color: white;
    font-size: 3em;
  }

  p {
    text-align: center;
    font-family: var(--font-main);
    font-size: 1.25em;
    color: white;
    margin: 50px 0;
    max-width: 500px;
  }
`;

const FadeBkg = styled.div`
  background-color: rgba(0,0,0,.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props=>(props.active? '1' : '0')}; 
  transition: opacity 1s;
`;

export default function FadeBlock(props) {

  const [scrollY, setScrollY] = useState(0);
  const [y, setY] = useState(0);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll,true);
    window.addEventListener('resize',getSizes,true);
    getSizes();
  },[]);

  function handleScroll() {
    let currentScroll = window.scrollY;
    setScrollY(currentScroll);
  }

  function getSizes() {
    let myOffsetTop = getOffsetTop(props.myId);
    let myOffsetHeight = document.getElementById(props.myId).offsetHeight;
    let fadeBorder = window.innerHeight*.3;
    setScrollY(window.scrollY);
    setY(myOffsetTop);
    setTop(myOffsetTop+fadeBorder);
    setBottom(myOffsetTop+myOffsetHeight-fadeBorder);
  }

  return (
    <Container id={props.myId} background={props.background} align={props.align}>
      <FadeBkg active={(scrollY+window.innerHeight)>top && (scrollY<bottom)}/>
      <Content active={(scrollY+window.innerHeight)>top && (scrollY<bottom)}>
        {props.children}
      </Content>
    </Container>
  )
}