import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import ShowImages from './ShowImages';
import apiKey from '../config';
import axios from 'axios';

const displayUrl = 'https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg';

export default class App extends Component {

  constructor(){
    super();
    this.searchGifs = this.searchGifs.bind(this);
    this.key = apiKey;
    this.state = {
      gifs: []
    }
  }

  /** Get data from api, that the photo data from json response, and update gifs state with this data */
  searchGifs = (userInput)=>{
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&text=${userInput}&format=json&nojsoncallback=1`)
      .then(response => this.setState({ gifs: response.data.photos.photo }))
      .catch(error => { console.log("Nothing was found", error)})
  }

  render() {
    return(

        <div className="App">
          <header className="App-header">
            <SearchForm searchResults={ this.searchGifs } />
            <NavBar />
            <ShowImages />
          </header>
        </div>


    );
  }
}

