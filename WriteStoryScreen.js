import React from 'react';
import {StyleSheet,Text,View,Image, TouchableOpacity}from 'react-native';
import AppHeader from 'AppHeader.js';
import {createAppContainer} from 'reaCt-navigation';
import {createBottomTabNavigator} from 'reaCt-navigation-tabs';
import db from  '../config'
import firebase from 'firebase'



export default class WriteScreen {


    render(){

      submitStory=()=>{
        this.title=title;
        this.author=author;
        this.story=story;
      }
    

  return (
    <View style={styles.container}>
    <TouchableOpacity
    style={styles.submitButton}
    onPress={this.submitStory}
    >
    <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
