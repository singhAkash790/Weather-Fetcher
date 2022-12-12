import React, { useState, useEffect } from "react";
import "./css/Style.css";
import { WaetherCard } from "./WaetherCard";

function Weather() {
  const [searchValue, setSearchValue] = useState("Agra");
  const [tempInfo, setTempInfo] = useState({});

  const getwetherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=549e8cd24b7181e9e37168b2d0c04919`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood} = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      // console.log(weathermood);

      const myNewWeatherInfo = {
        country,
        sunset,
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
      };
      setTempInfo(myNewWeatherInfo);
    } 
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getwetherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="sreach"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getwetherInfo}
          >
            search
          </button>
        </div>
      </div>
      <WaetherCard tempInfo={tempInfo} />
    </>
  );
}

export default Weather;
