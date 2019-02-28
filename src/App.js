import React, { Component } from "react";
import axios from 'axios';
import WordOfTheDay from './components/WordOfTheDay';
import "./App.css";

class App extends Component {
  state = {
    words: []
  }

  componentDidMount() {
    axios
      .get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key')
      .then(res => console.log(res))
  }

  render() {
    return (
      <WordOfTheDay/>
    )
  }
}

export default App;
