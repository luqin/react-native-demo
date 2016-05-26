import React from 'react';
import {AppRegistry, Platform,} from 'react-native';

// import App from './app/containers/App';
import App from './issue/detail/containers/Home';

AppRegistry.registerComponent('RNDemo', () => App);

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('RNDemo', {
    rootTag: app
  })
}
