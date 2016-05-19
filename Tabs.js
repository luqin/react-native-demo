var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
} = ReactNative;
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';

var LinkingExample = require('./LinkingExample');
// var BadInstagramCloneApp = require('./BadInstagramCloneApp');
var ImagePickerManager = require('NativeModules').ImagePickerManager;

export default React.createClass({
  getInitialState() {
    return {};
  },
  p() {
    var options = {
      title: '选择图片', // specify null or empty string to remove the title
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍摄照片...', // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: '从相册选择...', // specify null or empty string to remove this button
      customButtons: {
        '从FB选择': 'fb', // [Button Text] : [String returned upon selection]
      },
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo', // 'photo' or 'video'
      videoQuality: 'high', // 'low', 'medium', or 'high'
      durationLimit: 10, // video recording max time in seconds
      maxWidth: 100, // photos only
      maxHeight: 100, // photos only
      aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
      aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
      quality: 0.2, // 0 to 1, photos only
      angle: 0, // android only, photos only
      allowsEditing: false, // Built in functionality to resize/reposition the image after selection
      noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
      storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
        skipBackup: true, // ios only - image will NOT be backed up to icloud
        path: 'images' // ios only - will save image at /Documents/images rather than the root
      }
    };

    /**
     * The first arg will be the options object for customization, the second is
     * your callback which sends object: response.
     *
     * See the README for info about the response
     */

    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // uri (on android)
        const source = { uri: response.uri, isStatic: true };

        console.info(source, Image)

        this.setState({
          avatarSource: source,
          imgRes: Object.assign({}, response)
        });
      }
    });
  },
  render() {
    let { avatarSource, imgRes } = this.state;
    let e;
    if (avatarSource) {
      console.info(this.state)
      e = <Image tabLabel='Tab #3' source={avatarSource}
                 style={[styles.uploadAvatar, {width: imgRes.width, height: 50, }]}/>;
    }
    return <View style={styles.container}>
      <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
        <LinkingExample tabLabel='Tab #1'/>
        <View tabLabel='Tab #2' style={styles.tv}>
          <Text style={styles.t} onPress={this.p}>选择图片</Text>
        </View>
        {e}
      </ScrollableTabView>
    </View>;
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  tv: {
    borderWidth: 2,
    borderBottomColor: 'blue',
    margin: 5,
  },
  t: {
    fontSize: 20,
    backgroundColor: '#ccc',
  },
  uploadAvatar: {
    backgroundColor: '#ddd',
  }
});