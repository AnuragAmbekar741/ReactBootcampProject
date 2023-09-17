import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardComponentDestructure1 from "./Card";

import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice"

const Restaurant = () => {
    const { id } = useParams()

    const [resInfo, setResInfo] = useState([])
    useEffect(() => {
        restaurantInfo()
    }, [])

    async function restaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=18.470274&lng=73.829233&menuId=" + id)
        const json = await data.json()
        setResInfo(json)
    }

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            addItem({
                name: 'pizza'
            })
        )
    }

    return (
        <>
            <CardComponentDestructure1 restaurant={resInfo} />
            <button
                className="m-3 p-5 bg-purple-50"
                onClick={addToCart}
            >
                Add Item
            </button>
        </>
    )
}

export default Restaurant;