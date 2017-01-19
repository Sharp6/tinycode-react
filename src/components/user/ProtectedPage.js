import React from 'react';
import fbInstance from '../../common/database';
import LoginPage from './LoginPage';
import AdminPage from '../admin/AdminPage';

class ProtectedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    fbInstance.auth().onAuthStateChanged(fbUser => {
      this.setState({ user: fbUser });
    });
  }

  render() {
    if(this.state.user !== null) {
      return <AdminPage />;
    } else {
      return <LoginPage />;
    }
  }
}

export default ProtectedPage;
