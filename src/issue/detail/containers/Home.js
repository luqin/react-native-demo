import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ToolbarAndroid,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from '../../../components/Spinner';

import TabBar from '../../../components/TabBar';
import Detail from './Detail';
import Attachment from './Attachment';
import Progress from './Progress';
import Device from './Device';
import Related from './Related';

class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(()=> {
      this.setState({
        data: {}
      })
    }, 1000);
  }

  openProfile() {
    Alert.alert(
      'Alert Title',
      '该功能未实现',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
        { text: 'OK', onPress: () => console.log('OK Pressed!') },
      ]
    )
  }

  render() {
    if (!this.state.data) {
      return (
        <View style={{flex: 1, justifyContent: 'center',}}>
          <Spinner/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLeft}>
            秦贺的故障报修单
          </Text>
          <Text style={styles.titleRight}>
            故障 | 业务系统
          </Text>
        </View>
        <LinearGradient
          start={[0.0, 0.5]} end={[1.0, 0.5]}
          locations={[0, 0.3, 0.7]}
          colors={['#A89426', '#A89426', '#132131']}
          style={styles.header}
        >
          <TouchableOpacity onPress={this.openProfile} style={{flex: 1, flexDirection: 'row',}}>
            <Image
              style={styles.avatar}
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              onPress={()=>{this.openProfile();}}
            />
            <View style={styles.headerLeft} onPress={this.openProfile}>
              <Text style={styles.headerName}>
                秦贺
              </Text>
              <Text style={styles.headerName}>
                渠道部 | 总监
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Text style={{color: '#fff'}}>
              处理中
            </Text>
            <Text style={styles.countdownTimer}>
              32:20
            </Text>
          </View>
        </LinearGradient>
        <TabBar
          selectedTab={0}
          activeTintColor={'#1E90FF'}
          iconSize={20}
          structure={[
            {
              title: '详情',
              iconName: 'wpforms',
              renderContent: () => <Detail/>,
            }, {
              title: '附件',
              iconName: 'paperclip',
              renderContent: () => <Attachment/>,
            }, {
              title: '协同',
              iconName: 'refresh',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="blue"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '进度',
              iconName: 'refresh',
              renderContent: () => <Progress/>,
            }, {
              title: '设备',
              iconName: 'tv',
              renderContent: () => <Device/>,
            }, {
              title: '知识',
              iconName: 'commenting-o',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="green"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '相关',
              iconName: 'link',
              renderContent: () => <Related/>,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    height: 30,
    paddingLeft: 10,
    paddingRight: 8,
    justifyContent: 'center',
  },
  titleLeft: {
    flex: 1,
    color: '#000',
    fontSize: 15,
    marginTop: 4,
  },
  titleRight: {
    flex: 1,
    fontSize: 13,
    textAlign: 'right',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerLeft: {
    flex: 1,
    marginLeft: 8,
  },
  headerName: {
    color: '#fff',
    fontSize: 14,
  },
  headerRight: {
    width: 50,
  },
  countdownTimer: {
    color: '#00FF7F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
