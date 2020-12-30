import React, { Component } from 'react'
import { View, StyleSheet ,Text} from 'react-native'
import { WebView } from 'react-native-webview';


const WebViewExample = ({navigation}) => {

    return (
       <View style = {styles.container}>
          <WebView
          source = {{ uri: navigation.state.params.amozonlink1 }}
          />
       </View>
    )
 }
 export default WebViewExample;
const styles = StyleSheet.create({
   container: {
      height: 800,
   }
})