import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import LargeImage from './largeImage'

const { height, width } = Dimensions.get('window')

let data =[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n8qdJPjst1CyYg-mSjNSIu0Z1z9h1_fR4NLXTpl66Y8AJD2k',
    'https://www.zoomtaqnia.com/wp-content/uploads/2016/02/Airbnb.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLddVLVeA4CcbX7mwyv-XollIrOOSmhRg_ept8LaIVXFIBfxsf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sILGVGzfpfP6xlQSN6ftnq4xA6WzKbcLr9xFAEogg36LuWwa',    'https://www.freedigitalphotos.net/blog/wp-content/uploads/2014/01/facebook-image-compression.jpg'
]

export default class ImageView extends Component{

    state={
        showLargeImage:false,
        imageSource:''
    }

    showLargeImage({pageX, pageY, locationX, locationY}, source){
        const translateX = pageX - locationX
        const translateY = pageY - locationY
        this.setState({translateX, translateY, showLargeImage:true, imageSource:source})
    }

    hideImage(){
        this.setState({showLargeImage:false})
    }

    render(){
        return(
            <View style={{flex:1, paddingTop:50}}>
                    {
                        data.map((source, index) =>{
                            return(
                                <TouchableOpacity 
                                    key={index}
                                    activeOpacity={0.8}
                                    onPress={(e)=>{
                                        nE = e.nativeEvent
                                        this.showLargeImage(nE, source)
                                    }}
                                    style={{height:100, width:width/2}}
                                >
                                    <Image source={{uri:source}} style={{flex:1}}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                    { this.state.showLargeImage && <LargeImage source={this.state.imageSource} hideImage={this.hideImage.bind(this)} translateX={this.state.translateX} translateY={this.state.translateY}/>}
            </View>
        )
    }
}