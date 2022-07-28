import React from 'react'
import { WEATHER_ICON_URL } from '../api'
import Moment from "moment";

import Card from './Card';

const CurrentWeather = ({ data }) => {
    const currentDate = `${Moment().format("dddd")}, ${Moment().format("MMMM Do YYYY")}`

    return (
        <>
            <div className='flex mx-auto gap-4'>
                <div className='flex flex-col gap-2 bg-slate-300 p-4 shadow-lg rounded-md'>
                    {/* Header with City and Weather Conditions */}
                    <h1 className='text-2xl'>{data.city}</h1>
                    <h3>{currentDate}</h3>
                    <div className='grid grid-flow-col gap-2'>
                        <div className='flex flex-col items-center justify-center p-2 border-r-2 border-gray-600'>
                            <img src={`${WEATHER_ICON_URL}/${data.weather[0].icon}@2x.png`} alt="weather" />
                            <p className='text-md text-center'>{data.weather[0].description}</p>
                        </div>
                        <h2 className='text-7xl p-5 text-center'>{Math.round(data.main.temp)}°C</h2>
                    </div>
                </div>
                {/* Weather Temperature and Details */}
                <div className='grid grid-cols-4 gap-2'>
                    <Card label={"Feels Like"} value={`${Math.round(data.main.feels_like)} °C`} />
                    <Card label={"Wind"} value={`${data.wind.speed} m/s`} />
                    <Card label={"Humidity"} value={`${data.main.humidity}%`} />
                    <Card label={"Pressure"} value={`${data.main.pressure} hPa`} />
                    <Card label={"Max"} value={`${data.main.temp_max} °C`} />
                    <Card label={"Min"} value={`${data.main.temp_min} °C`} />
                    <Card label={"Sunrise"} value={`${Moment(data.sys.sunrise * 1000).utc().format("hh:mm:ss")}`} />
                    <Card label={"Sunset"} value={`${Moment(data.sys.sunset * 1000).utc().format("hh:mm:ss")}`} />
                </div>
            </div>
        </>
    )
}

export default CurrentWeather