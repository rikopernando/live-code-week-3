import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

class VidioItem extends React.Component {
    
    render() {
      console.log(this.props)
      const  { vidio, navigate } = this.props
      return(
            <View style={styles.container}>
                <Image source={{ uri : vidio.raw.snippet.thumbnails.medium.url }} style={{height : 200}} />
                <View style={styles.descContainer}>
                  <Image source={{ uri : 'https://randomuser.me/api/portraits/women/44.jpg' }} style={{ width : 50, height : 50, borderRadius : 25 }} />
                  <TouchableOpacity style={styles.videoDetails}
                        onPress={ () => navigate('DetailYouTube', { youtubeId : vidio.raw.id.videoId }) }>
                    <Text numberOfLines={2} style={styles.videoTitle}> {vidio.title} </Text>
                    <Text style={styles.videoStats}> {vidio.raw.snippet.channelTitle + " - 8.6M views 3 months ago "} </Text>
                  </TouchableOpacity>
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
  },
  videoDetails : {
    paddingHorizontal : 15,
    flex : 1,
    color : '#E5E5E5',
  },
  videoStats : {
    fontSize : 15,
    paddingTop : 3
  }
})
export default connect(mapStateToProps)(VidioItem)

