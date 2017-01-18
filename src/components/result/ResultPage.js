import React from 'react';
import CorrectPage from '../correct/CorrectPage';
import MistakePage from '../mistake/MistakePage';
import fbInstance from '../../common/database';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ''
    };
  }
  
  componentWillMount() {
    const database = fbInstance.database().ref('/codes');
    console.log("I mounted!");
      database.child(0).once('value', snap => {
      this.setState({code: snap.val()});
    });
  }

  render() {
    if(this.props.params.code === this.state.code) {
      return <CorrectPage />;
    }
    return <MistakePage />;

  }
}

export default ResultPage;
