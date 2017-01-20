import React from 'react';
import fbInstance from '../../common/database';
import {Link} from 'react-router';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  signIn(event) {
    event.preventDefault();
    console.log("Signing in with", this.state.email, this.state.password);
    const authPromise = fbInstance.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    authPromise.catch(e => console.log("Auth error:", e.message));
  }

  render() {
    return (
      <div className="modal-body">
        <p>Voor deze pagina moet je inloggen:</p>
        <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} className="style-2" placeholder="email" />
        <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="style-2" placeholder="wachtwoord" />

        <div id="btnDiv"><a className="btn noselect" href="#" onClick={this.signIn.bind(this)}>Log in</a></div>
        <div id="btnDiv"> <Link className="btn noselect" to="/attempt">Terug</Link></div>
      </div>
    );
  }
}

export default LoginPage;
