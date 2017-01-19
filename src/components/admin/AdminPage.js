import React from 'react';
import fbInstance from '../../common/database';
import {Link} from 'react-router';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codes: {},
      newId: '',
      newCode: ''
    }
  }

  componentDidMount() {
    const database = fbInstance.database().ref().child('codes');
    database.on('child_added', (snap) => {
      let codes = this.state.codes;
      codes[snap.key] = snap.val()
      this.setState({ codes: codes });
    });

    database.on('child_changed', (snap) => {
      let codes = this.state.codes;
      codes[snap.key] = snap.val()
      this.setState({ codes: codes });
    });

    database.on('child_removed', (snap) => {
      let codes = this.state.codes;
      delete codes[snap.key];
      this.setState({ codes: codes });
    });
  }

  handleNewIdChange(e) {
    this.setState({newId: e.target.value});
  }
  handleNewCodeChange(e) {
    this.setState({newCode: e.target.value});
  }
  submitNewCode() {
    fbInstance.database().ref('codes/' + this.state.newId).set(this.state.newCode);
  }
  deleteCode() {
    // the usage of this might be kinda ugly...
    fbInstance.database().ref('codes/' + this).remove();
  }
  signOut() {
    fbInstance.auth().signOut();
  }

  render() {
    console.log(this.state.codes);
    return (
      <div className="modal-body">

        <h1>Admin!</h1>
        <ul>
        {
          Object.keys(this.state.codes).map(key => {
            return (
              <li key={key}>
                {key}: {this.state.codes[key]}
                <a href="#" onClick={this.deleteCode.bind(key)}>verwijder</a>
              </li>
              );
          })
        }
        </ul>
        <input type="text" onChange={this.handleNewIdChange.bind(this)} />
        <input type="text" onChange={this.handleNewCodeChange.bind(this)} />
        <a href="#" onClick={this.submitNewCode.bind(this)}>Submit new code</a>
        <a href="#" onClick={this.signOut.bind(this)}>Log out</a>
        <Link to="/attempt">Check code</Link>
      </div>
	  );
  }
}

export default AdminPage;
