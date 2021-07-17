import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import {Yelp} from '../../util/Yelp';


export default function App() {
  // stock list from Alpha Advantage API
  const [businesses, setBusinesses] = useState([]);
  
  const searchYelp = (term, location, sortBy) => {
    Yelp(term, location, sortBy)
    .then(businesses => {
      setBusinesses(businesses)
      console.log(businesses.length)
    })
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />      
    </div>
  )
}