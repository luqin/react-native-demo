import React from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import RNButton from 'react-native-button';

class Button extends React.Component {
  render() {
    let { style, textStyle, disabledStyle, ...other } = this.props;
    return (
      <RNButton
        containerStyle={[styles.button, style]}
        style={[styles.text, textStyle]}
        styleDisabled={[styles.disabledStyle, disabledStyle]}
        {...other}
      />
    );
  }
}

var styles = StyleSheet.create({
  button: {
    height: 38,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 14,
    // color: 'green',
  },
  disabledStyle: {},
});

export default Button;
