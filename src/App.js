import React, { useState } from "react";
import axios from "axios";
import './index.css'

function App() {

  
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=36aab99dcfdf8d079f6e1f2919052947`;

  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
      });
      setlocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Search locations"
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchlocation}
        />
      </div>
      <div className="cont">
        <div className="header">
          <div className="location">
          <h2>City</h2>
            <h1>{data.name}</h1>
            
        

            {data.weather? <h2 className="bold">{data.weather[0].main}</h2>: null}
          </div>
          <div className="temp">
          <h2>Temperature</h2>
            { data.main? <h1>{(data.main.temp-273).toFixed(2)}°C</h1>:null}
          </div>
          <div className="pressure">
          <h2>Pressure</h2>
          { data.main? <h1>{data.main.pressure}</h1>:null}
          </div>
          
          
        </div>
        <div className="footer">
          <div className="feels">
          { data.main? <p className="bold">{(data.main.feels_like-273).toFixed(2)}°C</p>:null}
          
            <p>feels like</p>
          </div>
          <div className="humidity">
          { data.main? <p className="bold">{data.main.humidity}%</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          { data.wind? <p className="bold">{data.wind.speed}Kmph</p>:null}
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
