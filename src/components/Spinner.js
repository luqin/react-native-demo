import React from 'react';

import {
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Component,
  PropTypes,
  Platform
} from 'react-native';

class Spinner extends React.Component {

  static defaultProps = {
    color: 'rgba(241,196,15, 1.0)'
  };

  render() {
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid {...this.props}/>
      )
    }
    return (
      <ActivityIndicatorIOS animating={true} {...this.props}/>
    )
  }
}

export default Spinner;
