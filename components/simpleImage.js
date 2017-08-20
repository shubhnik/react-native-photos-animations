import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';

import LargeImage from './largeImageContainer'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class SimpleImage extends Component{

    state={
        showLargeImage:false,
        animateImageX: new Animated.Value(0),
        animateImageY: new Animated.Value(0),
        scaleImageX: new Animated.Value(1),
        scaleImageY: new Animated.Value(1)
    }

    animateImage({pageX, pageY, locationX, locationY}){
        const translateX = pageX - locationX
        const translateY = pageY - locationY
        //alert(translateY)
        //alert((height - (translateY+100))/2)
        Animated.parallel([
           Animated.timing(
               this.state.animateImageY,
               {
                   toValue: height/2 - (translateY+50),
                   duration:200
               }
           ),
           Animated.timing(
               this.state.animateImageX,
               {
                   toValue: width/2 - (translateX+50),
                   duration:200
               }
           ),
           Animated.timing(
               this.state.scaleImageX,
               {
                   toValue: (width/100),
                   duration:100
               }
           ),
           Animated.timing(
               this.state.scaleImageY,
               {
                   toValue: (height/3)/100,
                   duration:100
               }
           )
        ]).start()
    }

    render(){
        return(
            <View >
                <TouchableOpacity
                    style={{height:100, width:100, zIndex:1}}
                    onPress={(e)=>{
                        nE = e.nativeEvent
                        this.setState({showLargeImage:true}, () => {
                            this.animateImage(nE)
                        })
                    }}
                >
                    <Animated.Image 
                    source={require('../images/scene.png')} 
                    style={{top:500, height:100, width:100, transform:[{translateX: this.state.animateImageX}, {translateY: this.state.animateImageY}, {scaleX: this.state.scaleImageX}, {scaleY: this.state.scaleImageY}]}} 
                    />
                </TouchableOpacity>
                <LargeImage  showLargeImage={this.state.showLargeImage} style={{height, width, backgroundColor:'rgba(0,0,0,0.8)', position:'absolute'}}/>
            </View>
        )
    }
}