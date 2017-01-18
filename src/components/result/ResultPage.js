import React from 'react';
import CorrectPage from '../correct/CorrectPage';
import MistakePage from '../mistake/MistakePage';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    const correct = props.params.code === "akai";

    this.state = {
      correct: correct
    };
  }

  render() {
    if(this.state.correct) {
      return <CorrectPage />;
    }
    return <MistakePage />;

  }
}

export default ResultPage;
