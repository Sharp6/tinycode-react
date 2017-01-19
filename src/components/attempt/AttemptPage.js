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
    console.log("I mounted!");
      database.once('value', snap => {
      console.log("data", snap.val());
    });
  }

  handleChange(event) {
    this.setState({code: event.target.value});
  }

  render() {
    return (
      <div className="modal-body">
        <h1>Place your bets!</h1>
        <p>Now in react style.</p>
        <input type="text" value={this.state.code} onChange={this.handleChange.bind(this)} className="style-2" autoComplete="off" />
        <Link to={`/result/0/${this.state.code}`}>Check code</Link>
      </div>
    );
  }
}

export default AttemptPage;
