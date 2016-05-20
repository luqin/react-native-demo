import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import IssueDetailHome from '../../issue/detail/containers/Home';
import IssueDetailAttachment from '../../issue/detail/containers/Attachment';
import IssueDetailProgress from '../../issue/detail/containers/Progress';

class App extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={IssueDetailHome} title="Login" initial={true}/>
          <Scene key="register" component={IssueDetailAttachment} title="Register"/>
          <Scene key="home" component={IssueDetailProgress}/>
        </Scene>
      </Router>
    );
  }
}

export default App;
