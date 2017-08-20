import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

export default class LargeImage extends Component{

    state={
        animateOpacity: new Animated.Value(0)
    }

    componentDidMount(){
        Animated.timing(
            this.state.animateOpacity,
            {
               toValue: 1,
               duration:200
            }
        ).start()
    }

    hideLargeView(){
        Animated.timing(
            this.state.animateOpacity,
            {
                toValue:0,
                duration:200
            }
        ).start()
    }
    render(){
        return(
            <Animated.View style={{ ...this.props.style, opacity:this.state.animateOpacity}}>
                <TouchableOpacity 
                    onPress={() => this.hideLargeView()}
                    style={{position:'absolute', justifyContent:'center', alignItems:'center', width:75, height:30,top:30, left:15, borderColor:'rgb(150,150,150)', borderWidth:1, borderRadius:3}}
                >
                    <Text style={{color:'rgb(150,150,150)', fontSize:18, fontWeight:'400'}}>close</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}