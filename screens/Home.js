import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity ,ActivityIndicator, FlatList} from 'react-native';
import * as firebase from 'firebase'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setYoutube } from '../Store/actions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import VidioItem from '../Components/Youtube/VidioItem'

class Home extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerStyle : {
                backgroundColor : '#fff'
            },
            headerLeft : (
                  <View>
                    <Image 
                          source={require('../image/youtube.jpeg')} 
                          style={{ width:98, height:22, color:'#fff', marginLeft : 17 }} 
                     /> 
                  </View>
            ),
            headerRight : (
                <View style={styles.rightNav}>
                
                  <TouchableOpacity>
                    <Icon style={{marginLeft:25}} name='search' size={25}/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon style={{marginLeft:25}} name='account-circle' size={25}/>
                  </TouchableOpacity>

                </View>
            )
        }
    }

  componentDidMount(){
    this.props.navigation.setParams({ signOut : this.signOut })

    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            console.log(user) 
        }
    })

		const url = 'https://protected-chamber-17561.herokuapp.com/youtube'
    axios.get(url)
    .then((resp) => {
      console.log('success')
      console.log(resp.data)
      this.props.setYoutube(resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
  console.log(this.props)
    return (
      <View style={styles.container}>

          <View style={styles.body}>
						{
							this.props.redux.isLoading ?
								<ActivityIndicator size='large' color='#330066' animating />
							:
                <FlatList 
                  data={this.props.redux.youtube}
                  renderItem={(video) =>  <VidioItem vidio={video.item} /> }
								  keyExtractor={(item,index) => index.toString()}
								  ItemSeparatorComponent={ () => <View style={{ height:0.5, backgroundColor:'#E5E5E5' }} /> } 	
                />
						}
          </View>

					<View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="home" size={25}/>
              <Text style={styles.tabTitle}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="whatshot" size={25}/>
              <Text style={styles.tabTitle}>Trending</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
              <Icon name="subscriptions" size={25}/>
              <Text style={styles.tabTitle}>Subcriptions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="folder" size={25}/>
              <Text style={styles.tabTitle}>Library</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }


  signOut = () => {
    firebase.auth().signOut()
        .then(() => {
            this.props.navigation.navigate('Login')
        })
        .catch((error) => {
            console.log(error)
        })
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor : 'white'
  },
  navbar : {
    height : 55,
    backgroundColor : 'white',
    elevation : 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav : {
    flexDirection : 'row',
    marginRight : 17
  }, 
  body : {
    flex : 1
  },
  tabBar : {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor : '#E5E5E5',
    flexDirection: 'row',
    justifyContent : 'space-around'
  },
  tabItem : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  tabTitle: {
    fontSize : 11,
    color : '#3c3c3c',
    paddingTop : 3
  }
})

const mapStateToProps = (state) => {
    return {
        redux : state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setYoutube}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

