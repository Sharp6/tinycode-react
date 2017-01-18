import React, {PropTypes} from 'react';
import { RouteTransition } from 'react-router-transition';

class App extends React.Component {
  render() {
    return (
      <div className="modal-wrap">
        <div className="modal-header"><h2>CodeBreaker</h2></div>
          <div className="modal-bodies">
            <RouteTransition
              pathname={this.props.location.pathname}
              atEnter={{ translateX: 200 }}
              atLeave={{ translateX: -200 }}
              atActive={{ translateX: 0 }}
              mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
            {this.props.children}
            </RouteTransition>
          </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
