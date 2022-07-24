import { useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Search from './components/Search';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetching Current and Forecast weather
    const weatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    // Getting the data using Promise all
    Promise.all([weatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(err => console.log(err));
  }

  console.log('weather ', currentWeather);
  console.log('forecast', forecast);


  return (
    <>
      <div className='flex flex-col gap-2 m-2'>
        <h1 className='text-orange-400 font-semibold text-5xl p-5'> GetKlima </h1>
        <Search
          onSearchChange={handleOnSearchChange}
        />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>

  );
}

export default App;
