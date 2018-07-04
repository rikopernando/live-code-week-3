import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

class VidioItem extends React.Component {
    
    render() {
      const vidio = this.props.vidio
      return(
            <View style={styles.container}>
                <Image source={{ uri : vidio.raw.snippet.thumbnails.medium.url }} style={{height : 200}} />
                <View style={styles.descContainer}>
                  <Image source={{ uri : 'https://randomuser.me/api/portraits/women/44.jpg' }} style={{ width : 50, height : 50, borderRadius : 25 }} />
                  <View style={styles.videoDetails}>
                    <Text numberOfLines={2} style={styles.videoTitle}> {vidio.title} </Text>
                    <Text style={styles.videoStats}> {vidio.raw.snippet.channelTitle + " - 8.6M views 3 months ago "} </Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name="more-vert" size={20} color='#999999'/>
                  </TouchableOpacity>
                </View>
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
    padding: 15,
  },
  descContainer: {
    flexDirection : 'row',
    paddingTop : 15
  },
  videoTitle : {
    fontSize : 16,
    color : '#3c3c3c',
  },
  videoDetails : {
    paddingHorizontal : 15,
    flex : 1
  },
  videoStats : {
    fontSize : 15,
    paddingTop : 3
  }
})
export default connect(mapStateToProps)(VidioItem)

