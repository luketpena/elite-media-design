import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import getOffsetTop from '../../modules/getOffsetTop';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Content = styled.div`
  positive: relative;
  opacity: ${props=>(props.active? '1' : '0')};
  transition: opacity .5s;
`;

export default function FadeBlock(props) {

  const [scrollY, setScrollY] = useState(0);
  const [y, setY] = useState(0);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll,true);
    let myOffsetTop = getOffsetTop(props.myId);
    let myOffsetHeight = document.getElementById(props.myId).offsetHeight;
    let fadeBorder = window.innerHeight/3;
    setY(myOffsetTop);
    setTop(myOffsetTop+fadeBorder);
    setBottom(myOffsetTop+myOffsetHeight-fadeBorder);
  },[]);

  function handleScroll() {
    let currentScroll = window.scrollY;
    setScrollY(currentScroll);
  }

  return (
    <Container id={props.myId}>
      <Content active={(scrollY+window.innerHeight)>top && (scrollY<bottom)}>
        {props.children}
      </Content>
    </Container>
  )
}