import React, { useState } from 'react';
import DateBox from "./PageComponets/DateBox";
import api from "./Info/API"


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  

  return (
    <div className="App">

      <main>
        <DateBox />
        <div className="search-box">

          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="locationBox">
              <div className="location">{weather.name}, {weather.sys.country}</div>

            </div>
            <div className="weatherBox">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>

            <div className="avatarSec">
              <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "avatar warm" : "avatar") : "avatar"}>

              </div>

              
            </div>


          </div>
        ) : ('')}


      </main>
    </div>
  );
}

export default App;