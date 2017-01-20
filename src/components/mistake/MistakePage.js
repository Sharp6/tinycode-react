import React from 'react';
import {Link} from 'react-router';

class MistakePage extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <h1>Jammer!</h1>
				<p>Waarschijnlijk had je maar een klein foutje. Klik op de knop hieronder om een andere code te proberen.</p>
				<div id="btnDiv"><Link to="/attempt" className="btn noselect">Try again!</Link></div>

      </div>
    );
  }
}

export default MistakePage;
