import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ToolbarAndroid,
  Image,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import TabBar from '../../../components/TabBar';
import Detail from './Detail';
import Attachment from './Attachment';

class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  openProfile() {
    Alert.alert(
      'Alert Title',
      '该功能未实现',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
      ]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="秦贺的故障报修单"
          actions={[{title: '故障', show: 'always'}]}
          onActionSelected={this.openProfile}
          style={styles.toolbar}
        />
        <LinearGradient
          start={[0.0, 0.5]} end={[1.0, 0.5]}
          locations={[0, 0.3, 0.7]}
          colors={['#A89426', '#A89426', '#132131']}
          style={styles.header}
        >
          <Image
            style={styles.avatar}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            onPress={this.openProfile}
          />
          <Text style={styles.headerName}>
            秦贺
          </Text>
          <Text style={styles.headerRight}>
            32:20
          </Text>
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
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="yellow"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '设备',
              iconName: 'tv',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="gray"/>
                    <Text>附件</Text>
                  </View>
                );}
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
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="green"/>
                    <Text>附件</Text>
                  </View>
                );}
            },
          ]}
        />
        <Text style={{marginBottom: 0}}>
          Homeaaaa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: "#fff",
    height: 30,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    padding: 10,
  },
  headerName: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  headerRight: {
    width: 50,
    color: '#00FF7F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Home;
