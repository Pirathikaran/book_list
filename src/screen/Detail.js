import React, { Component } from 'react'
import { Text, View,StyleSheet ,Image,ScrollView,Button} from 'react-native'

export default class Detail extends Component {

        

    render() {

        return (
            
            <View  style={styles.container}>
                <Image style={styles.image} source={{ uri:this.props.navigation.state.params.img }}></Image>
                <ScrollView>
                <Text style={styles.title}>{this.props.navigation.state.params.Title}</Text>
                <Text style={styles.description} >Description : {this.props.navigation.state.params.dec}</Text>
                <Text style={styles.author}> Author : {this.props.navigation.state.params.author}</Text>
                <Text style={styles.author}> Publisher : {this.props.navigation.state.params.publish}</Text>
               <View style={styles.button}>
               <Button
                            color='#f0a74c' 
                            style={{color:'black'}}
                            styleDisabled={{color: 'red'}}
                            onPress={() =>this.props.navigation.navigate('WebViewExample',{ amozonlink1 : this.props.navigation.state.params.amozonlink})}
                            title="Buy Now"/>
               </View>
                
                
                </ScrollView>

            </View>
           
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        padding:5,
        margin:5,
        borderRadius:10

    },
    title:{
        margin:3,
        fontSize:18,
        fontWeight:"bold",
        color:"#1B98F5",
        justifyContent:'space-evenly'
    },
    description:{
        margin:5,
        fontSize:16,
        fontWeight:'normal',
        color:"black",
        justifyContent:'space-evenly'
    },
    author:{
        margin:2,
        fontSize:14,
        fontWeight:'bold',
        color:"black",
        justifyContent:'space-evenly'
    },
  
    image:{
        margin:10,
        width:"70%",
        height:"60%",
        alignSelf:'center',
    
      },
      button:{
          margin:5,

      }
    
})

