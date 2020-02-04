import React from 'react';
import Emoji from 'node-emoji';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function EmoSpan(props) {
  let emoString = "";
  const emosize = props.random ? Math.floor(Math.random()*(props.emosize)+1) : props.emosize;

  for (let i = 0; i < emosize; i++) {
    emoString += Emoji.random().emoji;
  }

  return (
    <span>{emoString}</span>
  );
}

function App() {
  let menu = [];
  for (let i=0; i < 6; i++) {
    menu.push(<li key={i}><EmoSpan emosize={4} random /></li>);
  }

  let tweets = [];
  for (let i=0; i < 200; i++) {
    tweets.push(<p key={i}><EmoSpan emosize={30} random /></p>);
  }

  let trends = [];
  for (let i=0; i < 10; i++) {
    trends.push(<li key={i}><EmoSpan emosize={8} random /></li>);
  }

  return (
    <Container>
      <Row className="pt-4">
        <Col md={3}>
          <h2 className="py-3"><EmoSpan emosize={3} /></h2>
          {menu}
        </Col>
        <Col md={6} className="tweets-container">
          <h3 className="pb-3">Home</h3>
          {tweets}
        </Col>
        <Col md={3}>
          <h3 className="pb-3">Trends</h3>
          {trends}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
