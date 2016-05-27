import React from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BarcodeScanner from 'react-native-barcode-scanner-universal';

class BarcodeScannerExample extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      code: null,
      scanning: false,
    };

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.scanToggle = this.scanToggle.bind(this);
  }

  componentDidMount() {
  }

  onBarCodeRead(code) {
    ToastAndroid.show('扫描成功', ToastAndroid.SHORT);
    this.setState({
      code,
      scanning: false,
    });
  }

  scanToggle() {
    if (this.state.scanning) {
      ToastAndroid.show('取消', ToastAndroid.SHORT);
    }
    this.setState({
      scanning: !this.state.scanning,
      code: null,
    });
  }

  renderScaner() {
    let scanArea = null;
    if (Platform.OS === 'ios') {
      scanArea = (
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
      )
    }

    return (
      <BarcodeScanner
        onBarCodeRead={this.onBarCodeRead}
        style={styles.camera}
      >
        {scanArea}
      </BarcodeScanner>
    );
  }

  renderCode(code) {
    if (!code) {
      return null;
    }
    console.info(code)
    return (
      <View>
        <Text>类型：{code.type}</Text>
        <Text>数据：{code.data}</Text>
      </View>
    );
  }

  render() {
    let { scanning, code } = this.state;
    return (
      <View style={styles.container}>
        <View style={{margin: 10,}}>
          <Icon.Button
            onPress={this.scanToggle}
            backgroundColor="#3498DB"
            name='ios-reverse-camera-outline'
            size={28}
            style={styles.iconButton}
          >
            <Text style={styles.iconButtonText}>{scanning ? '退出' : '扫一扫'}</Text>
          </Icon.Button>
          {code ? this.renderCode(code) : null}
        </View>
        {scanning ? this.renderScaner() : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconButton: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  button: {
    margin: 5,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  buttonText: {
    height: 20,
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  camera: {
    flex: 1
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
});

export default BarcodeScannerExample;
