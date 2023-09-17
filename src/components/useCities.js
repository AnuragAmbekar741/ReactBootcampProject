import { useState, useEffect } from "react";
import stateMap from '../utlis/india-state-cities.json'

const useCities = (state) => {

    const [cities, setCities] = useState([])

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const json = stateMap[state]
            console.log(json)
            setCities(json)
        }
    }, [state])

    return cities;

}

export default useCities;