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
      <h1>Login!</h1>
      <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} className="style-2" />
      <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="style-2" />
      <a href="#" onClick={this.signIn.bind(this)}>Sign in</a>
      <Link to="/attempt">Check code</Link>
      </div>
    );

  }
}

export default LoginPage;
