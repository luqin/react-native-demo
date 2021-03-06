import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';

import CommentList from '../components/CommentList';

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
          url: 'https://facebook.github.io/react-native/img/header_logo.png',
        }, {
          type: 'image',
          url: 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
        }, {
          type: 'image',
          url: 'http://img.sj33.cn/uploads/allimg/201401/7-140120011050954.jpg',
        }, {
          type: 'image',
          url: 'http://facebook.github.io/react/img/logo_og.png',
        }, {
          type: 'image',
          url: 'https://facebook.github.io/react-native/img/header_logo.png',
        }, {
          type: 'image',
          url: 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
        }, {
          type: 'image',
          url: 'http://img.sj33.cn/uploads/allimg/201401/7-140120011050954.jpg',
        },]
      });
    }, 1000);
  }

  /**
   * 附件缩略图
   */
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

  renderAttachmentScrollView() {
    let { attachments } = this.state;
    if (!attachments) {
      return <Spinner/>;
    }
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        style={styles.thumbnailContainer}
      >
        {attachments.map(this.renderAttachmentThumbnail)}
      </ScrollView>
    );
  }

  /**
   * 评论列表
   */
  renderCommentList() {
    return (
      <View>
        <View style={styles.commentListHeader}>
          <Text>评论（5）</Text>
        </View>
        <CommentList/>

        <View style={styles.commentLoadMoreWrapper}>
          <View style={styles.commentLoadMore}>
            <Text>更多（20）</Text>
            <Icon name={'ios-arrow-down'} size={18}/>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
        {/* 描述 */}
        <View style={{margin: 10,}}>
          <Text>
            我在公文系统中，对数据进行统计分析，发现按区域人员统计时，数据不准确，偏差很大，整个报表根本就没法用。
          </Text>
          {this.renderAttachmentScrollView()}
        </View>

        <View style={styles.separator}/>
        {this.renderCommentList()}

        <View style={styles.separator}/>
        <View style={{margin: 10,}}>
          <Text>
            单号：S201603060023{'\n'}
            申请时间：2016-03-09 12:23{'\n'}
            受理时间：2016-03-09 12:29{'\n'}
            目标完成时间：2016-03-09 13:15
          </Text>
        </View>

        <View style={styles.separator}/>
        <View style={styles.replyContainer}>
          <TextInput
            style={styles.replyInput}
            placeholder="评论"
            multiline={true}
          />
          <Button style={styles.replyButton} onPress={()=>{console.info('reply')}}>
            发送
          </Button>
        </View>
      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: '#ddd'
  },

  replyContainer: {
    height: 50,
    flexDirection: 'row',
    //bottom: 0,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  replyInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#0f0f0f',
  },
  replyButton: {
    marginTop: 3,
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

  commentListHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },

  commentLoadMoreWrapper: {
    alignItems: 'flex-end',
    right: 0,
    padding: 10,
  },

  commentLoadMore: {
    flexDirection: 'row',
  },
});

export default Detail;
