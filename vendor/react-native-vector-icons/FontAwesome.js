import React, {PropTypes} from 'react';
import {View} from 'react-native';

var A = React.createClass({
  propTypes: {
    ...View.propTypes,
  },

  render: function () {
    var { colors, ...otherProps } = this.props;
    return (
      <View {...otherProps}/>
    );
  }
});

module.exports = A;
