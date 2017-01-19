import React from 'react';
import {Link} from 'react-router';

class AuthPart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="userDiv">
        <Link to="/login"><i className="fa fa-cogs" aria-hidden="true"></i></Link>
      </div>
	  );
  }
}

export default AuthPart;
