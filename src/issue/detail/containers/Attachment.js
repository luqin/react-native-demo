import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ImagePicker from '../components/ImagePicker';

class Attachment extends React.Component {

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
        <ImagePicker/>
      </View>
    );
  }
}

export default Attachment;
