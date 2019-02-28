import React, { Component } from "react";
import axios from 'axios';
import WordOfTheDay from './components/WordOfTheDay';
import "./App.css";

class App extends Component {
  state = {
    word: '',
    definitions: []
  }

  componentDidMount() {
    axios
      .get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/love?key=4aaa26e1-eaad-49b9-ab4d-13900b3da89c`)
      .then(res => console.log(res.data[0]))
      // .then(res => console.log(res.data[0].shortdef))
      // .then(res => console.log(res.data[0].hwi.hw))
      // .then(res => this.setState({ 
      //   word: res.data[0].hwi.hw,
      //   definitions: res.data[0].shortdef
      // }))
  }

  render() {
    return (
      <WordOfTheDay
      word={this.state.word}
      definitions={this.state.definitions}
      />
    )
  }
}

export default App;
