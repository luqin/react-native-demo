import React from 'react';
import {
  Text,
  View,
} from 'react-native';

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
      <View>
        <Text>
          Detail
        </Text>
      </View>
    );
  }
}

export default Detail;
