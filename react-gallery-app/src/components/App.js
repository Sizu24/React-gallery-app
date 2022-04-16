import React, {Component} from 'react';
import { Routes, Route, BrowserRouter, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchForm from './SearchForm';
import ImageContainer from './ImageContainer';
import NotFound from './NotFound';
import apiKey from '../config';
import axios from 'axios';

const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_';

class App extends Component {

  constructor(){
    super();
    this.searchGifs = this.searchGifs.bind(this);
    this.key = apiKey;
    this.state = {
      gifs: []
    }
  }

  /** Get data from api, that the photo data from json response, and update gifs state with this data */
  searchGifs = (userInput = "cats")=>{
    axios.get(`${url}key=${this.key}&text=${userInput}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => this.setState({ gifs: response.data.photos.photo }))
      .catch(error => { console.log("Nothing was found", error)})
  }

  componentDidMount(){
    <ImageContainer imageList={ this.searchGifs() } />
  }

  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/search" element={<SearchForm searchResults={ this.searchGifs } /> } />
          <Route path="/search/:name" element={<ImageContainer imageList={ this.state.gifs } />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
