import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 64px;
  display: flex;
  align-items: center;
  p {
    color: white;
    margin: 0 auto;
    text-align: center;
    font-family: var(--font-main);
  }
`;

export default function Footer() {
  return(
    <Container>
   
      <p>Copyright © {new Date().getFullYear()} Elite Media Design</p>
    </Container>
  )
}