import React from 'react' 
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native' 
import styles from '../../styles/Auth'
 
class Register extends React.Component { 
 
    register = () => { 
        this.props.register() 
    } 
  
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
 
                    <Text style={styles.header}> Register  </Text> 
 
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
                        this.props.isLoading
					     ? 
								<ActivityIndicator size='large' color='#330066' animating />
						:
							<TouchableOpacity 
								style={styles.btn} 
								onPress={this.register}> 
									<Text style={{fontSize : 18 }}> Register </Text> 
						   </TouchableOpacity> 
 
                    }
                </View> 
             </KeyboardAvoidingView>  
           
       ) 
    } 
 
} 
 
export default Register 

