import React from 'react' 
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native' 
import styles from '../../styles/Auth'
import * as firebase from 'firebase'
 
class Login extends React.Component { 
  
    handleChangeEmail = (email) => { 
     this.props.onChangeEmail(email) 
    } 

    handleChangePassword = (password) => { 
     this.props.onChangePassword(password) 
    } 

    render() { 
        return ( 
             
           <KeyboardAvoidingView behavior='padding' style={styles.wrapper}> 
                 
                <View style={styles.container} > 
 
                    <Text style={styles.header}>  Login  </Text> 
 
                    <TextInput  
                        style={styles.textInput} placeholder='Email' 
                        onChangeText={ this.handleChangeEmail } 
                        value={ this.props.email } 
                        underlineColorAndroid='transparent'  
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoCapitalize='none'
                    /> 

                    <TextInput  
                        style={styles.textInput} placeholder='Password' 
                        onChangeText={ this.handleChangePassword } 
                        value={ this.props.password } 
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />

                    {
                        this.props.isLoading ?
                            <ActivityIndicator size='large' color='#330066' animating />
                            :
                            <TouchableOpacity 
                                style={styles.btn} 
                                onPress={ this.props.login }> 
                                    <Text style={{fontSize : 18 }}> Login </Text> 
                           </TouchableOpacity> 
                    }

                    <TouchableOpacity 
                        onPress={ this.props.register }> 
                        <Text 
                            style={styles.registrasi}>  
                            Tidak Punya Akun ? Registrasi Disini  
                        </Text> 
                    </TouchableOpacity>

                </View> 
             </KeyboardAvoidingView>  
           
       ) 
    } 
 
} 
 
export default Login 

