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
    this.setState({
      newId: '',
      newCode: ''
    });
  }
  deleteCode() {
    // the usage of this might be kinda ugly...
    fbInstance.database().ref('codes/' + this).remove();
  }
  signOut() {
    fbInstance.auth().signOut();
  }

  render() {
    return (
      <div className="modal-body">

        <h1>Admin pagina</h1>
        <table className="codeTable">
          <thead>
            <tr><th>ID</th><th>Code</th><th>Verwijder</th></tr>
          </thead>

          <tbody>
          {
            Object.keys(this.state.codes).map(key => {
              return (
                <CodeRow key={key} id={key} code={this.state.codes[key]} remove={this.deleteCode} />
              );
            })
          }
          </tbody>
        </table>
        <div className="twoColumns">
          <div className="left">
            <input type="text" onChange={this.handleNewIdChange.bind(this)} value={this.state.newId} className="style-2" placeholder="Nieuw ID" />
          </div>
          <div className="right">
            <input type="text" onChange={this.handleNewCodeChange.bind(this)} value={this.state.newCode} className="style-2" placeholder="Nieuwe code"  />
          </div>
        </div>
        <div id="btnDiv"><a className="btn noselect" href="#" onClick={this.submitNewCode.bind(this)}>Submit new code</a></div>
        <div id="btnDiv"><a className="btn noselect" href="#" onClick={this.signOut.bind(this)}>Log out</a></div>
        <div id="btnDiv"><Link className="btn noselect" to="/attempt">Terug</Link></div>
      </div>
    );
  }
}

class CodeRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.code}</td>
        <td><a href="#" onClick={this.props.remove.bind(this.props.id)}><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
      </tr>
    );
  }
}

export default AdminPage;
