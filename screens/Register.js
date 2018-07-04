import React from 'react' 
import Register from '../Components/Auth/Register' 
import * as firebase from 'firebase'

class RegisterScreen extends React.Component { 

	static navigationOptions = {
        title : 'Registrasi'
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
        
        if(this.state.email === ""){
            alert('Silakan masukan email anda')
        }else if(this.state.password === ""){
            alert('Silakan masukan password anda')
        }else{

			this.setState({isLoading : true })
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
					console.log('success')
                    this.props.navigation.navigate('Home')
                })
                .catch((error) => {
                    // Handle Errors Here
                    this.setState({isLoading : false })
                    alert(error)
                    console.log(error)
                    var errorCode = error.code
                    var errorMessage = error.message
                })
        }
    } 
 
    render() { 
            return ( 
                    <Register email={this.state.email} 
                        password={this.state.password}
                        onChangePassword={this.onChangePassword}
                        onChangeEmail={this.onChangeEmail} 
                        register={this.register}
                        isLoading={this.state.isLoading} /> 
                   )  
    } 
} 

export default RegisterScreen 

