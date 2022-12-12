import React from 'react'

export const WaetherCard = ({tempInfo}) => {
  const  {
    country, 
    sunset,
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
   }= tempInfo;

let sec= sunset;
let date = new Date(sec*1000);
let time= `${date.getHours()}:${date.getMinutes()}`                                                                                           

  return (
    <>  
    <div className="widget">
        <div className="weatherIcon">
        <i className={'wi wi-day-sunny'}/>
        </div>
          <div className="weatherInfo">
            <div className="temperature">
              <span>{ temp }</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weathermood}
                 <div className="place">{name} {country}</div>
              </div>
            </div>
          </div> 
          <div className="date">
             {new Date().toLocaleString()}  
          </div>  
          <div className="extra-temp">
            <div className="temp-info-minmax">            
                <div className="two-sided-section">
                  <p>
                    <i className= {"wi wi-sunset"}></i>
                  </p>
                  <p className='extra-info-leftside'>
                    {time}<br />
                    sunset
                  </p>
                </div>
                <div className="two-sided-section">
                  <p>
                    <i className= {"wi wi-humidity"}></i>
                  </p>
                  <p className='extra-info-leftside'>
                    {humidity}<br />
                    humidity
                  </p>
                </div>
            </div>
          <div className="weather-extra-info">
          <div className="two-sided-section">
                  <p>
                    <i className= {"wi wi-barometer"}></i>
                  </p>
                  <p className='extra-info-leftside'>
                    {pressure}<br />
                    pressure
                  </p>
                </div>
                <div className="two-sided-section">
                  <p>
                    <i className= {"wi wi-strong-wind"}></i>
                  </p>
                  <p className='extra-info-leftside'>
                    {speed}<br />
                    wind
                  </p>
                </div>
          </div>
          
          
          </div>
      </div>
    </>
  )
}
