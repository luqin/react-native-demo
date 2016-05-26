import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import CommentList from '../components/CommentList';

class Progress extends React.Component {

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
      <View>
        <CommentList/>
      </View>
    );
  }
}

export default Progress;
