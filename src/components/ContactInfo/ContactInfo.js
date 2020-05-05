import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  .text {
    color: white;
    font-family: monospace;
    font-size: 1.25em;
    margin: 8px;
  }
`;

export default function ContactInfo() {
  return (
    <Container>
      <p className="text">Phone: 763-123-1234</p>
      <p className="text">Email: info@elitemediadesign.com</p>
      <p className="text">Address: 80 S 8th St, Suite #005 Minneapolis, MN 55402</p>
    </Container>
  )
}