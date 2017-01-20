import React from 'react';
import {Link} from 'react-router';
import fbInstance from '../../common/database';

class AttemptPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  componentDidMount() {
    const database = fbInstance.database().ref('/codes');
      database.once('value', snap => {
    });
  }

  handleChange(event) {
    this.setState({code: event.target.value});
  }

  render() {
    return (
      <div className="modal-body">
        <p>
					Welkom bij Janssens CodeBreaker. Vul hieronder je code in, controleer je code en wacht af!
				</p>
        <input type="text" value={this.state.code} onChange={this.handleChange.bind(this)} className="style-2" autoComplete="off" />
        <div id="btnDiv"><Link className="btn noselect" to={`/result/0/${this.state.code}`}>Controleer code</Link></div>
      </div>
    );
  }
}

export default AttemptPage;
