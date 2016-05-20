import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toolbar from '../components/Toolbar';

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

        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          style={styles.tabs}
        >
          <View tabLabel="详情">
            <Icon name="rocket" size={30} color="#900"/>
            <Text>
              Home1
            </Text>
          </View>
          <Text tabLabel="附件">
            Home2
          </Text>
          <Text tabLabel="React3">
            Home3
          </Text>
        </ScrollableTabView>
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
