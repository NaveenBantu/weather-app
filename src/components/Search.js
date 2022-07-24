import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, getApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inpValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inpValue}`, getApiOptions)
            .then(response => response.json())
            .then((response) => {
                // console.log(response)
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            //.then(results => console.log(results))
            .catch(err => console.error(err));
    }

    const handleChange = (searchData) => {
        console.log("first", searchData)
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <>
            <AsyncPaginate
                placeholder="Search a city"
                debounceTimeout={600}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
        </>
    )
}

export default Search;