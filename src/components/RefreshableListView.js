import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class RefreshableListView extends React.Component {

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
      <View>RefreshableListView</View>
    );
  }
}

export default RefreshableListView;
