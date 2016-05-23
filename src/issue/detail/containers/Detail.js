import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  Image
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
      attachments: null,
    };
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        attachments: [{
          type: 'image',
          url: 'http://facebook.github.io/react/img/logo_og.png',
        }, {
          type: 'image',
          url: 'https://github.com/reactjs/react-router/raw/master/logo/vertical@2x.png',
        }]
      });
    }, 1000);
  }

  renderAttachmentThumbnail(item, idx) {
    let e;
    switch (item.type) {
      case 'image':
        e = (
          <Image
            key={idx}
            style={styles.thumbnailImage}
            source={{uri: item.url}}
          />
        );
        break;
      default:
    }
    return e;
  }

  renderAttachmentList() {
    let { attachments } = this.state;
    if (!attachments) {
      return <Spinner/>;
    }
    return (
      <View style={styles.thumbnailContainer}>
        {attachments.map(this.renderAttachmentThumbnail)}
      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* 描述 */}
        <View style={{margin: 10,}}>
          <Text>
            我在公文系统中，对数据进行统计分析，发现按区域人员统计时，数据不准确，偏差很大，整个报表根本就没法用。
          </Text>
          {this.renderAttachmentList()}
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

  thumbnailContainer: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
  },

  thumbnailImage: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});

export default Detail;
