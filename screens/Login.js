import React from 'react' 
import { StyleSheet } from 'react-native' 
import Login from '../Components/Auth/Login' 
import * as firebase from 'firebase'
 
const config = {
    databaseURL: "https://live-code-week-3.firebaseio.com",
    apiKey: "AIzaSyDaa1PkHgnKdYeK-gjRxDrHU9cnm4cmnvM",
    authDomain: "live-code-week-3.firebaseapp.com",
}
firebase.initializeApp(config)

class LoginScreen extends React.Component { 

	static navigationOptions = {
        title : 'Login'
    }
 
    constructor(){ 
        super() 
        this.state = { 
            email : '',
            password : '',
            isLoading : false
        } 
    } 
 
    onChangeEmail = (email) => { 
	   this.setState({email}) 
	} 
 
    onChangePassword = (password) => { 
	   this.setState({password}) 
	} 
 
    register = () => {
        this.props.navigation.navigate('Register')
    }

    login = () => {

        if(this.state.email === ""){
            alert('Silakan masukan email anda')
        }else if(this.state.password === ""){
            alert('Silakan masukan password anda')
        }else{

            this.setState({isLoading : true })
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {

            this.props.navigation.navigate('Home')
                })
                .catch((error) => {
                    alert(error)
                    this.setState({isLoading : false })
                    console.log(error)
                    var errorCode = error.code
                    var errorMessage = error.message
                })
        }
    }

    render() { 
        const { navigate } = this.props.navigation
            return ( 
                    <Login email={this.state.email} 
                        password={this.state.password}
                        onChangePassword={this.onChangePassword}
                        onChangeEmail={this.onChangeEmail} 
                        register={this.register}
                        login={this.login}
                        isLoading={this.state.isLoading} /> 
                   )  
    } 
} 
 
export default LoginScreen 

