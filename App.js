import React, { Component } from 'react';
import { styles } from './components/styles/mainStyle'
import { View, TouchableOpacity, TextInput, Image, ScrollView, } from 'react-native';
import ImageCard from './components/imageCard'

const url = 'http://api.tvmaze.com/search/shows?q='

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      URL: '',
      data: [],
    }
  }
  componentDidMount() {
    this.reguestUrl(url)
  }

  reguestUrl = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      console.log("URL not found")
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  createurl = (searchTerm) => {
    const URL = url + searchTerm;
    this.setState({ URL })
    this.reguestUrl(URL)
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container} >
          <View style={styles.searchView}>
            <TextInput 
              onChangeText={(term) => { this.searchUpdated(term) }}
              placeholder='Введите название фильма'
              style={styles.textInput}>
            </TextInput>
            <TouchableOpacity 
                onPress={() => this.createurl(this.state.searchTerm)}
                style={styles.searchBtn}>            
              <Image 
                source={require('./assets/search.png')}
                style={{position: 'absolute', width: 40, height: 40, tintColor: '#fff'}}/>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={styles.resultView}>
              {data.map(item => (
                <ImageCard data={item} key={item} />
              ))}
            </View>
          </ScrollView>
      </View>
    )
  }
}