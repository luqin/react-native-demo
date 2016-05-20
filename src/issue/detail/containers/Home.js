import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Toolbar from '../components/Toolbar';
import TabBar from '../../../components/TabBar';

class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <TabBar
          selectedTab={0}
          activeTintColor={'#1E90FF'}
          iconSize={20}
          structure={[
            {
              title: '详情',
              iconName: 'wpforms',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="wpforms" size={30} color="blue"/>
                    <Text>Home1</Text>
                  </View>
                );}
            }, {
              title: '附件',
              iconName: 'paperclip',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="paperclip" size={30} color="green"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '协同',
              iconName: 'refresh',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="green"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '进度',
              iconName: 'refresh',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="green"/>
                    <Text>附件</Text>
                  </View>
                );}
            }, {
              title: '设备',
              iconName: 'tv',
              renderContent: () => {
                return (
                  <View style={{flex:1}}>
                    <Icon name="refresh" size={30} color="green"/>
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
  tabs: {
    marginTop: 50,
  },
  header: {
    backgroundColor: "#fff",
  },
});

export default Home;
