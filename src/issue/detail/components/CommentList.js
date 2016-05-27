import React, {PropTypes} from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/zh-cn';

import * as Constants from '../constants';
import Spinner from '../../../components/Spinner';
import CommentUp from '../components/CommentUp';

/**
 * 评论列表
 */
class CommentList extends React.Component {

  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [{
      id: 1,
      create_time: Date.now(),
      author: {
        avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      },
      ups: [1, 2],
      content: '接口采集不到数据，报表统计的接口数据，存在中断采集的情况，无法获取报表的基础数据源。',
    }, {
      id: 2,
      create_time: 1463900038678,
      author: {
        avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      },
      content: '报表统计数据偏小，根据之前的经验，由公文系统出的报表数据和实际报表有20%的数据偏小，这种量级也很大。',
    }],
  };

  listView = null;
  refreshControl = null;

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(props.data.concat([]))
    };
  }

  componentDidMount() {
  }

  onEndReached() {
    const { limit, page, actions, data } = this.props;
    console.info('onEndReached');
  }

  renderRow(comment, sectionID, rowID, highlightRow) {
    const date = moment(comment.create_time).startOf('minute').fromNow();
    return (
      <View
        key={comment.id}
        style={[styles.commentWrapper]}
      >

        <View style={[styles.imageWrapper]}>
          <Image
            style={styles.authorImg}
            source={{uri: comment.author.avatar_url}}
          >
          </Image>

          <Text style={styles.commentNumText}>
            {date}
          </Text>
        </View>

        <View style={styles.commentContentWrapper}>
          <Text>{comment.content}</Text>
        </View>

        <View style={styles.actionsWrapper}>
          <CommentUp
            replyId={comment.id}
            ups={comment.ups}
            style={styles.up}
          />
          <Text>回复</Text>
        </View>

      </View>
    );
  }

  renderFooter() {
    const { reachedEndPending } = this.props;
    if (reachedEndPending) {
      return (
        <View style={styles.reachedEndLoading}>
          <Spinner size="large"/>
        </View>
      )
    }
    return null;
  }

  render() {
    return (
      <ListView
        showsVerticalScrollIndicator
        removeClippedSubviews
        enableEmptySections
        ref={view => {this.listView = view}}
        initialListSize={10}
        pagingEnabled={false}
        scrollRenderAheadDistance={90}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        onEndReachedThreshold={30}
        onEndReached={this.onEndReached.bind(this)}
        renderFooter={this.renderFooter.bind(this)}
        refreshControl={
          <RefreshControl
            ref={(view)=> this.refreshControl=view}
            refreshing={false}
            onRefresh={()=>{
              console.info('onRefresh')
            }}
            {...Constants.refreshControl}
          />
				}
      />
    );
  }
}

const authorImgSize = 35;
const commentIconSize = 12;

const styles = StyleSheet.create({
  commentWrapper: {
    borderBottomColor: 'rgba(0,0,0,0.02)',
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: 'row',
  },

  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  date: {
    flexDirection: 'row',
    flex: 1
  },

  author: {
    flex: 1
  },
  authorText: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: 12
  },

  dateIcon: {
    height: commentIconSize,
    width: commentIconSize,
    flexDirection: 'row'
  },

  dateText: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: 12,
    textAlign: 'right',
    flex: 1
  },

  commentIcon: {
    height: commentIconSize,
    width: commentIconSize
  },


  imageWrapper: {
    width: authorImgSize + 15
  },

  commentNumText: {
    marginTop: 15,
    fontSize: 12,
    color: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
    width: authorImgSize

  },

  commentContentWrapper: {
    flex: 1,
  },

  authorImg: {
    height: authorImgSize,
    width: authorImgSize,
    borderRadius: authorImgSize / 2

  },
  commentFooter: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  replyIcon: {
    width: 15,
    flex: 1
  },
  up: {
    width: 40,
    //justifyContent: 'flex-start',
    alignItems: 'center'
  },

  reachedEndLoading: {
    paddingTop: 20,
    paddingBottom: 20
  },

  actionsWrapper: {
    width: 40,
    paddingLeft: 10,
  },
});

export default CommentList;
