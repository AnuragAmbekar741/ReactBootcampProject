import { useState } from 'react'
import stateObj from '../utlis/india-state-cities.json'
import useCities from './useCities'

const searchRes = (searchText, listOfRes) => {
    return listOfRes.filter((item) => item?.data?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
}

const SearchBar = ({ listOfRes, setFilteredRes, setStateName }) => {

    const [searchText, setSearchText] = useState("")
    const [indState, setIndState] = useState(Object.keys(stateObj)[0])
    const [indCity, setIndCity] = useState("")

    const cityList = useCities([indState])

    return (
        <div className="flex justify-between m-7 p-5 bg-purple-200 rounded-lg">
            <form onSubmit={(e) => {
                e.preventDefault()
                const filteredRes = searchRes(searchText, listOfRes)
                setFilteredRes(filteredRes)
                console.log(filteredRes)
            }}>
                <input className='mx-3' id="searchText"
                    placeholder="restaurant"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <select
                    className='mx-3'
                    value={indState}
                    onChange={(e) => {
                        setIndState(e.target.value)
                    }}
                >
                    {Object.keys(stateObj).map((state) =>
                    (<option key={state} value={state}>
                        {state}
                    </option>)
                    )}
                </select>
                <select
                    className='mx-3'
                    value={indCity}
                    onChange={(e) => {
                        setIndCity(e.target.value)
                        setStateName(e.target.value)
                    }}
                >
                    {cityList.map((city) =>
                    (<option key={city} value={city}>
                        {city}
                    </option>)
                    )}
                </select>
                <button className='bg-gray-200 px-3 py-1 mx-5 rounded-md'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar