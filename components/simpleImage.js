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

    showLargeImage({pageX, pageY, locationX, locationY}){
        const translateX = pageX - locationX
        const translateY = pageY - locationY
        this.setState({translateX, translateY, showLargeImage:true})
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

    hideImage(){
        this.setState({showLargeImage:false})
    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={{height:100, width:100}}
                    onPress={(e)=>{
                        nE = e.nativeEvent
                        this.showLargeImage(nE)
                        //this.setState({showLargeImage:true}, () => {
                        //    this.animateImage(nE)
                        //})
                    }}
                >
                    <Image 
                        ref={c => this._image=c}
                        source={require('../images/scene.png')} 
                        style={{top:500, height:100, width:100}} 
                    />
                </TouchableOpacity>
                { this.state.showLargeImage && <LargeImage hideImage={this.hideImage.bind(this)} translateX={this.state.translateX} translateY={this.state.translateY} showLargeImage={this.state.showLargeImage} style={{height, width, backgroundColor:'rgba(0,0,0,0.8)', position:'absolute'}}/>}
            </View>
        )
    }
}

//, transform:[{translateX: this.state.animateImageX}, {translateY: this.state.animateImageY}, {scaleX: this.state.scaleImageX}, {scaleY: this.state.scaleImageY}]