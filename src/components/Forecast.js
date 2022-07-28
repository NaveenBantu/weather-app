import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { WEATHER_ICON_URL } from '../api';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <h1 className='text-xl font-bold mx-5'>Daily Forecast</h1>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='flex items-center m-2 p-4 h-10 justify-between bg-gray-300 rounded-lg w-3/4 mx-auto'>
                                    <div className='flex items-center justify-between gap-3'>
                                        <img src={`${WEATHER_ICON_URL}/${item.weather[0].icon}.png`} alt="weather" />
                                        <label className="">{forecastDays[idx]}</label>
                                    </div>
                                    <label>{item.weather[0].description}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 p-5">
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="flex items-center justify-between bg-slate-100 p-2">
                                    <label className='text-slate-500'>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast