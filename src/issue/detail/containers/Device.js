import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import BarcodeScannerExample from '../components/BarcodeScannerExample';

class Device extends React.Component {

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
        <BarcodeScannerExample/>
      </View>
    );
  }
}

export default Device;
