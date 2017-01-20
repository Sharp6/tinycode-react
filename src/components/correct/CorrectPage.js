import React from 'react';

class CorrectPage extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <h1>Hoera!</h1>
				<p>Goed gedaan! De code is juist! Misschien is het nu tijd voor een moeilijkere uitdaging?</p>
				<img className="successImg" />
      </div>
    );
  }
}

export default CorrectPage;
