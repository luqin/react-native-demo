import React from 'react';
import {
  Text,
  View,
} from 'react-native';

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
        <Text>
          Progress
        </Text>
      </View>
    );
  }
}

export default Progress;
