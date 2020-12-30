import React, { Component } from 'react'
import { Text, View,FlatList ,StyleSheet,Image} from 'react-native'
import {Card} from 'react-native-paper'
import { ActivityIndicator, Colors } from 'react-native-paper';



export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data1: [],
          isLoading: true
        };
      }

    
   
    
      componentDidMount() {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BzxGUTW2Gta2BC9sWi6BRodGw0ANXara")
        .then(Response=>Response.json())
        .then(data => this.setState({ data1:data.results.books}))
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

      }

    render() {
      let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',alignContent:'center' ,margin:100}}>
          {/* <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" /> */}
          <ActivityIndicator animating={true} color={Colors.red800} />

          <Text style={{marginTop: 10}} children="Please Wait..." />
        </View>
      ) : (
        <View >
                
        <FlatList
        numColumns={2}
    data={this.state.data1}
    keyExtractor={item => item.rank}
    renderItem={({ item }) => (
        <Card style={styles.container} onPress={() =>this.props.navigation.navigate('Detail',{Title:item.title,
        img:item.book_image,
        dec:item.description,
        author:item.author,
        publish:item.publisher,
        amozonlink:item.amazon_product_url
          })}>
        <View key={item} style={styles.inner} >
            
                <Image style={styles.image} source={{ uri: item.book_image }}></Image>
                <Text style={styles.text}>{item.title}</Text>

        
        </View>
        </Card>
    

    )}
  />
    </View>

      )
      return (
        <View>
          {view}
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
        backgroundColor:"#000",
        borderRadius:10

    },
  
    image:{
        margin:1,
        width:130,
        height:160,
        alignSelf:'center',
    
      },
      box:{
          justifyContent:'center',
          alignContent:'center',
          alignContent:'center'
      },
    inner:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
       fontSize:14,
       fontWeight:"bold",
       color:"#eee",
       justifyContent:'space-evenly'
     
 
    
        },
})
