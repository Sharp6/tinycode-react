import React from 'react';
import {Link} from 'react-router';

class AttemptPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Place your bets!</h1>
        <p>Now in react style.</p>
        <Link to="mistake">Mistake</Link>
      </div>
    );
  }
}

export default AttemptPage;
