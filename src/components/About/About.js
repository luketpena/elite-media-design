import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  p {
    display: block;
    margin: 50px auto;
  }
`;

export default function About() {
  return (
    <Container>
      <h2><span className="highlight">Who</span> are we?</h2>
      <p>Back in 2005, two college roommates had a shared vision: to build a company that could handle all things web related.</p>
      <p>Since our humble origins in a garage, we have grown into a company of over 30 makers located in the heart of downtown Minneapolis.</p>
      <p>We strive to deliver value in our service, and to understand with respect all of our clients needs and to provide a partnership that is created when we host our clients web services, develop their site, market their product/service or simply give them advice.</p>
      <p>Our vision is to create a business world full of prosperity, meaning, and connection for all.</p>
    </Container>
  )
}

// EMD was founded in 2005 in a garage when two college roommates, 
// Henry and John, put their minds together to create all things web related. 
// The office, now located in the IDS Center in downtown Minneapolis, has over 30 employees.