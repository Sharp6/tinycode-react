import React from 'react';
import {Link} from 'react-router';

class AuthPart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="userDiv">
		I am user
		<Link to="/login">login</Link>
	  </div>
	);
  }
}

export default AuthPart;
