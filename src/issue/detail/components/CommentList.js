import React, {PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  RefreshControl,
} from 'react-native';

/**
 * 评论列表
 */
class CommentList extends React.Component {

  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <View><Text>CommentList</Text></View>
    );
  }
}

export default CommentList;
