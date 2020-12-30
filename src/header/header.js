import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'

export default function Header(){
    return (
        <View style={styles.header}>
            <View >
                <Text  style={styles.headerText}> Home Page</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#232f3e',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#eee',
        letterSpacing:1

    }

})
