import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Icon name="paperclip" size={20} color="blue"/>
        <Text>Attachment</Text>
      </View>
    );
  }
}

export default Attachment;
