import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import LargeImage from './largeImage'

export default class LargeImageContainer extends Component{
    render(){
        return(
             this.props.showLargeImage && <LargeImage style={{ ...this.props.style }}/> 
        )
    }
}