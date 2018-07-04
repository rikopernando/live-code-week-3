import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

class VidioItem extends React.Component {
    
    render() {
      const vidio = this.props.vidio
			console.log('batas')
			console.log(this.props.vidio)
			console.log(this.props.vidio[0].type)
      return(
            <View style={styles.container}>
                <Image source={{ uri : 'https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg' }} style={{height : 200}} />
            </View>
         )
    }

}

const mapStateToProps = (state) => {
    return {
        redux : state
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default connect(mapStateToProps)(VidioItem)

