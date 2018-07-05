import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity ,ActivityIndicator, FlatList} from 'react-native';
import * as firebase from 'firebase'
import axios from 'axios'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import YouTube from 'react-native-youtube'


class DetailYouTube extends React.Component {

  static navigationOptions = {
    headerTitle : 'Youtube',
    headerStyle : {
        backgroundColor : '#000',
    },
    headerTitleStyle : {
       color : '#fff'
    }
  }

  render() {
  console.log(this.props)
    return (
      <View style={styles.container}>
				<YouTube
					videoId={this.props.navigation.state.params.youtubeId}   // The YouTube video ID
					play={true}             // control playback of video with true/false
					fullscreen={true}       // control whether the video should play in fullscreen or inline
					loop={true}             // control whether the video should loop when ended

					onReady={e => this.setState({ isReady: true })}
					onChangeState={e => this.setState({ status: e.state })}
					onChangeQuality={e => this.setState({ quality: e.quality })}
					onError={e => this.setState({ error: e.error })}

					style={{ alignSelf: 'stretch', height: 300 }}
				/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center'
  },
})

const mapStateToProps = (state) => {
    return {
        redux : state
    }
}

export default connect(mapStateToProps)(DetailYouTube)

