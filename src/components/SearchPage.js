import CardContainerComponent from './CardContainer.js'
import { useState, useEffect, } from 'react'
import SearchBar from './SearchBar.js'



const SeachComponent = () => {

    const [filteredRes, setFilteredRes] = useState([])
    const [listOfRes, setListOfRes] = useState([])

    //Passing data in HOC manner using state and PROPS
    const [stateCityName, setStateName] = useState("default")

    //Consuming data using useContext

    useEffect(() => {

        function fetchDataPro() {
            fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING')
                .then((res) => res.json())
                .then((res) => { setListOfRes(res?.data?.cards[2]?.data?.data?.cards) })
                .catch(err => console.log(err))
        }
        fetchDataPro()
    }, []) //=>mounting


    useEffect(() => {

    }, [])

    useEffect(() => {
        //Render componet with []
        //Fill data to component through API call
        fetchData()
    }, [])

    async function fetchData() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setListOfRes(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json?.data?.cards[2]?.data?.data?.cards)
    }

    const fn = (x) => {
        console.log(x)
        setStateName(x)
    }

    return (
        <>
            <div className="card-container" >
                <SearchBar setStateName={setStateName} listOfRes={listOfRes} setFilteredRes={setFilteredRes} />
                <CardContainerComponent stateCityName={stateCityName} filteredRes={filteredRes.length ? filteredRes : listOfRes} />
            </div>
        </>
    )
}

export default SeachComponent;
