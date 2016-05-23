import React from 'react';
import {
  Text,
  TextInput,
  View,
  Picker,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';

class Detail extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      language: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* 描述 */}
        <View style={{margin: 10,}}>
          <Text>
            我在公文系统中，对数据进行统计分析，发现按区域人员统计时，数据不准确，偏差很大，整个报表根本就没法用。
          </Text>
          <Spinner/>
        </View>

        <View style={styles.separator}/>
        <Text>
          我在公文系统中，对数据进行统计分析，发现按区域人员统计时，数据不准确，偏差很大，整个报表根本就没法用。
        </Text>

        <View style={styles.separator}/>
        <View style={styles.replyContainer}>
          <TextInput
            style={styles.replyInput}
            placeholder="评论"
            multiline={true}
          />
          <Button style={{}}>
            发送
          </Button>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: '#ddd'
  },
  replyContainer: {
    flexDirection: 'row',
    bottom: 0,
    marginRight: 10,
  },
  replyInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#0f0f0f',
  },
  replyButton: {
    width: 100,
    // height: 30,
  },
  replyButtonText: {
    color: 'rgba(255,255,255,0.9)',
    height: 30,
  },
});

export default Detail;
