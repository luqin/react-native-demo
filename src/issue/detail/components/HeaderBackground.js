import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class HeaderBackground extends React.Component {
  render() {
    return (
      <LinearGradient
        start={[0.0, 0.5]} end={[1.0, 0.5]}
        locations={[0, 0.3, 0.7]}
        colors={['#A89426', '#A89426', '#132131']}
        style={this.props.style}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default HeaderBackground;
