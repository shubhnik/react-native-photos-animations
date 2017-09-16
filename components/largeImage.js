import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';


const { height, width } = Dimensions.get('window');

export default class LargeImage extends Component{

    state={
        animateImageX: new Animated.Value(0),
        animateImageY: new Animated.Value(0),
        scaleImageX: new Animated.Value(1),
        scaleImageY: new Animated.Value(1),
        viewOpacity: new Animated.Value(0),
        scaleViewX: new Animated.Value(1),
        scaleViewY: new Animated.Value(1)
    }

    componentDidMount(){
        Animated.parallel([
            Animated.timing(
                this.state.viewOpacity,
                {
                    toValue:1,
                    duration:100,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.animateImageY,
                {
                    toValue: height/2 - (this.props.topLeftY+50),
                    duration:200,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.animateImageX,
                {
                    toValue: width/2 - (this.props.topLeftX+width/4),
                    duration:200,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.scaleImageX,
                {
                    toValue: 2,
                    duration:100,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.scaleImageY,
                {
                    toValue: (height/3)/100,
                    duration:100,
                    useNativeDriver:true
                }
            )
         ]).start()
    }

    animateBack(){
        Animated.parallel([
            Animated.timing(
                this.state.animateImageY,
                {
                    toValue: 0,
                    duration:200,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.animateImageX,
                {
                    toValue: 0,
                    duration:200,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.scaleImageX,
                {
                    toValue: 1,
                    duration:100,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.state.scaleImageY,
                {
                    toValue: 1,
                    duration:100,
                    useNativeDriver:true
                }
            )
        ]).start(()=>this.props.hideImage())
    }

    render(){
        return( 
            <Animated.View style={{height, width, backgroundColor:'rgba(0,0,0,0.9)', position:'absolute', opacity:this.state.viewOpacity, transform:[{scaleX:this.state.scaleViewX}, {scaleY:this.state.scaleViewY}]}} >
                <Animated.Image
                    resizeMode='cover'
                    source={{uri:this.props.source}} 
                    style={{top:this.props.topLeftY, left:this.props.topLeftX, height:100, width:width/2, transform:[{translateX: this.state.animateImageX}, {translateY: this.state.animateImageY}, {scaleX: this.state.scaleImageX}, {scaleY: this.state.scaleImageY}]}} 
                />
                <TouchableOpacity 
                    onPress={()=>this.animateBack()}
                    style={{left:20, top:30, position:'absolute', height:30, width:60, backgroundColor:'rgba(20,20,20,0.7)', borderRadius:3, borderWidth:0.7, borderColor:'lightgrey', justifyContent:'center', alignItems:'center'}}
                >
                    <Text style={{color:'lightgrey'}}>Close</Text>
                </TouchableOpacity>
            </Animated.View>

            
        )
    }
}