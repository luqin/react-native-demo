import React, {PropTypes} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CommentUp extends React.Component {

  static propTypes = {
    pending: PropTypes.bool,
    disabled: PropTypes.bool,
    replyId: PropTypes.number,
    ups: PropTypes.array,
    userId: PropTypes.number
  };

  static defaultProps = {
    pending: false,
    disabled: false,
    ups: []
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  onUpPress() {
    const { disabled, pending, upReply, replyId, userId } = this.props;
    if (disabled) {
      return window.alert('不能给自己点赞哦!')
    }
  }

  isUped() {
    return false;
  }

  renderUpIcon() {
    if (this.props.pending) {
      return (
        <Spinner
          size='small'
          style={styles.loading}
        />
      )
    }
    return (
      <Icon
        name={'md-thumbs-up'}
        size={16}
        color={this.isUped() ? '#3498DB':'rgba(0,0,0,0.2)'}
        style={styles.upIcon}
      />
    )
  }

  render() {
    const { ups, style } = this.props;
    let count = ups.length;
    return (
      <TouchableOpacity
        onPress={this.onUpPress.bind(this)}>
        <View style={[styles.wrapper, style]}>
          {count == 0 ? null : (
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{count}</Text>
            </View>
          )}
          {this.renderUpIcon()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: 40,
  },
  textWrapper: {
    paddingRight: 7
  },
  text: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.2)',
  },
  loading: {
    height: 12,
    width: 16
  },
  upIcon: {},
});

export default CommentUp;
