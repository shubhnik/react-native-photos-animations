/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ImageView from './components/ImageView'

export default class photoViewer extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageView />
      </View>
    );
  }
}

AppRegistry.registerComponent('photoViewer', () => photoViewer);
