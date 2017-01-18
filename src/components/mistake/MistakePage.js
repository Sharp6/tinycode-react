import React from 'react';
import {Link} from 'react-router';

class MistakePage extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <h1>Jammer!</h1>
        <p>Motivational poster.</p>
        <Link to="/attempt">Try again!</Link>
      </div>
    );
  }
}

export default MistakePage;
