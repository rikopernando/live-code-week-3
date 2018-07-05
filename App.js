import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import HomeScreen from './screens/Home'
import DetailYouTubeScreen from './screens/DetailYouTube'
import { Provider } from 'react-redux'
import store from './Store'

const AuthStack = createStackNavigator({
    Login : { screen : LoginScreen },
    Register : { screen : RegisterScreen },
    DetailYouTube : { screen : DetailYouTubeScreen }
},{
    initialRouteName : 'Login'
})

const AppStack = createStackNavigator({
    Home : { screen : HomeScreen }
},{
    initialRouteName : 'Home'
})

const Navigate = createSwitchNavigator(
    {
        Auth : AuthStack,
        App : AppStack
    },{
        initialRouteName : 'Auth'       
    }
)

export default class App extends React.Component {
    render(){
        return (
            <Provider store={ store }>
                <Navigate />
            </Provider>
       )
    }
}

