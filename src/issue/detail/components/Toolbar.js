import React from 'react';
import {
  ToolbarAndroid,
  View,
  StyleSheet,
} from 'react-native';

class Toolbar extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'

    }
  }

  render() {
    return (
      <ToolbarAndroid
        title="秦贺的故障报修单"
        actions={[{title: '故障', show: 'always'}]}
        onActionSelected={this.onActionSelected}
        style={styles.toolbar}
      />
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#fff",
    height: 50,
  },
});

export default Toolbar;
