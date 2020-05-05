import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 80vh; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  input, textarea {
    display: block;
    width: 100%;
    padding: 12px;
    resize: none;
    margin: 25px 0;
    border-radius: 16px;
    font-size: 1.25em;
  }

  textarea {
    height: 30vh
  }

  button {
    font-size: 1.25em;
    padding: 8px 16px;
    display: block;
    margin: 0 auto;
    border-radius: 16px;
    cursor: pointer;
    
    background-color: rgba(0,0,0,0);
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);

    transition: all .3s;

    &:hover {
      padding: 8px 32px;
      background-color: var(--color-secondary);
      color: white;
    }
  }
`;

const animLetter = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10vw) rotate(35deg);;
  }

  100% {
    opacity: .5;
    transform: translateX(10vw) rotate(35deg);
  }
`;

const animText = keyframes`
0% {
  opacity: 0;
  transform: translateX(-5vw);
}

100% {
  opacity: 1;
  transform: translateX(0);
}
`;

const SentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;

  .icon {
    animation: ${animLetter} 2s ease-in-out;
    color: var(--color-secondary);
    font-size: 128px;
    transform: translateX(10vw) rotate(35deg);
    position: absolute;
    opacity: .5;
  }

  h2 {
    animation: ${animText} 1s ease-in-out;
    z-index: 1;
  }
`;

export default function Contact() {

  let [sent, setSent] = useState(false);

  let [inName, setInName] = useState('');
  let [inEmail, setInEmail] = useState('');
  let [inMessage, setInMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newContactEmail = {
      name: inName,
      email: inEmail,
      message: inMessage
    }
    console.log('Email sent:',newContactEmail);

    setInName('');
    setInEmail('');
    setInMessage('');
    
    setSent(true);
  }

  function renderContent() {
    if (!sent) {
      return (
        <div>
          <h2><span className="highlight">Contact</span> Us</h2>
          <Form onSubmit={e=>handleSubmit(e)}>
            <input
              required
              type="text"
              placeholder="Your name"
              value={inName}
              onChange={e=>setInName(e.target.value)}
              />
            <input
              required
              type="email"
              placeholder="youremail@place.com"
              value={inEmail}
              onChange={e=>setInEmail(e.target.value)}
              />
            <textarea
              required
              placeholder="Say what you need to say."
              value={inMessage}
              onChange={e=>setInMessage(e.target.value)}
              />
            <button>Submit</button>
          </Form>
        </div>
      )
    } else {
      return (
        <SentBox>
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <h2>Message Sent!</h2>
        </SentBox>
      )
    }
  }

  return (
    <Container>
      {renderContent()}
    </Container>
  )
}