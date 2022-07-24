import React from 'react'

const CurrentWeather = ({ data }) => {
    return (
        <>
            <div className='flex flex-col gap-2 bg-slate-300 m-4 p-4 w-2/5 shadow-lg rounded-md'>
                {/* Header with City and Weather Conditions */}
                <div className='bg-slate-500 text-white'>
                    <h1 className='text-xl p-2'>
                        {data.city}
                    </h1>
                    <p className='p-2'>{data.weather[0].description}</p>
                </div>

                {/* Weather Temperature and Details */}
                <div className='flex justify-between'>
                    <h2 className='text-8xl p-5 content-center'>{Math.round(data.main.temp)}°C</h2>
                    <div className='w-full p-5 bg-slate-200'>
                        <div className='flex justify-between'>
                            <span>Feels Like</span>
                            <span>{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Wind</span>
                            <span>{data.wind.speed} m/s</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Humidity</span>
                            <span>{data.main.humidity}%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pressure</span>
                            <span>{data.main.pressure} hPa</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CurrentWeather