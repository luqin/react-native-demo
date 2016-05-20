/*
 * Component Name: TabBar
 * Description: This component is used for render a TabBar
 * 
 * Dependencies:
 *  -> react-native-vector-icons 1.0.3 (https://github.com/oblador/react-native-vector-icons)
 *      - This library is used for fontawesome icons on the TabBar. For iOS only use
 *        fontawesome.ttf and add RNVectorIcons.xcodeproj to Libraries.
 *
 * Properties:
 *  -> structure
 *      - its and array of objects that define the properties of each TabBar
 *      - an object inside the array should look like {title: <string>, iconName: <string>
 *                                                     renderContent: <function>}
 *
 * Example:
 *  -> <TabBar structure={[{
 *                           title: 'Tab 1',
 *                           iconName: 'star',
 *                           renderContent: () => {return(<View><Text>Tab 1</Text></View>});}
 *                         }]}
 *             selectedTab={0}/>
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar = require('./CustomTabBar');

class TabBar extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      structure: this.props.structure,
      selectedTab: this.props.selectedTab,
      iconSize: this.props.iconSize ? this.props.iconSize : 30,
      activeTintColor: this.props.activeTintColor ? this.props.activeTintColor : null
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <CustomTabBar />}
        onChangeTab={(o)=>{}}
        initialPage={this.state.selectedTab}
      >
        {this.state.structure.map((tabProps, tabIndex) =>
          <View
            style={{flex:1}}
            tabLabel={tabProps.title + '!$#' + tabProps.iconName + '!$#' + this.state.iconSize}
            key={tabIndex}
          >
            {tabProps.renderContent()}
          </View>
        )}
      </ScrollableTabView>
    );
  }
}

var styles = StyleSheet.create({});

export default TabBar;