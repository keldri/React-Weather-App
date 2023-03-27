import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import PropTypes from 'prop-types';

import { GEO_API_URL, geoApiOptions } from "../../api";


const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
                geoApiOptions
            );
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    );
};

Search.propTypes = {
    /** */
    onSearchChange: PropTypes.func,
}
export default Search;
