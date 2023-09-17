const CardComponent = (props) => {
    const res = props.restaurant
    return (
        <div className='card-class'>
            <img src={res.img} alt="" />
            <h2>{res.title}</h2>
            <h3>{res.cuisine}</h3>
            <h4>{res.rating}</h4>
        </div>
    )
}

const CardComponentDestructure1 = ({ restaurant, stateCityName }) => {
    // const { img, title, cuisine, rating } = restaurant
    if (!restaurant.data) return null;
    console.log(restaurant.data)
    const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.data

    return (
        <div className='m-3 p-3 w-52 bg-purple-100 rounded-md text-left'>
            <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} alt="" />
            <h2 className="font-bold my-3">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h4>District : {stateCityName}</h4>
        </div>
    )
}

const CardComponentDestructure2 = ({ img, title, cuisine, rating }) => {
    return (
        <div className='card-class'>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>{cuisine}</h3>
            <h4>{rating}</h4>
        </div>
    )
}
// <Card {...data[0]} />

export default CardComponentDestructure1;