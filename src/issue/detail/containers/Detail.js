import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import ImagePicker from '../components/ImagePicker';

class Detail extends React.Component {

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
        <Icon name="wpforms" size={20} color="blue"/>
        <Text>Detail</Text>
        <ImagePicker/>
      </View>
    );
  }
}

export default Detail;
