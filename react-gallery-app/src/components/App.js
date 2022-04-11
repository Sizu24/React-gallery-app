import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import ShowImages from './ShowImages';
import apiKey from '../config';
import axios from 'axios';

export default class App extends Component {

  constructor(){
    super();
    this.key = apiKey;
    this.searchGifs = this.searchGifs.bind(this);
    this.state = {
      gifs: []
    }
  }

  searchGifs(){
    console.log("hello");
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <SearchForm seachResults={ this.seachGifs } />
          <NavBar />
          <ShowImages />
        </header>
      </div>
    );
  }
}

