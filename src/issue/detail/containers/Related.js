import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import NavigatorExample from './Navigator/NavigatorExample';

class Related extends React.Component {

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
      <View style={{flex:1}}>
        <NavigatorExample/>
      </View>
    );
  }
}

export default Related;
