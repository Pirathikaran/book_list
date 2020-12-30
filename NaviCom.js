import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detail from './Detail';
import Home from './Home';
import Headers from './header'
import WebViewExample from './Webview';





const RootStack = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
          headerTitle:()=><Headers/>,
          headerStyle:{backgroundColor:'#232f3e'},
          

        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:{
          title: 'Details ',
          headerTitleStyle:{color:'#eee'},
          headerStyle:{backgroundColor:'#232f3e'}
            }
          },
          WebViewExample:{
            screen:WebViewExample,
            navigationOptions:{
              title: ' ',
              headerStyle:{backgroundColor:'#232f3e'}
                }
              },
         
    },{
    initialRouteName:'Home'
    })
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class NaviCom extends React.Component {
    render() {
      return <AppContainer />;
    }
  }