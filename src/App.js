import './App.css';
import countriesJSON from "./countries.json";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(countriesJSON)

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
