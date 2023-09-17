import { Link } from 'react-router-dom'
import Card from './Card.js'

const CardContainerComponent = ({ filteredRes, stateCityName }) =>
    <div className='flex flex-wrap p-5'>
        {filteredRes.map((restaurant, index) => {
            return (<Link
                key={restaurant.data.id}
                to={`/restaurant/${restaurant.data.id}`}
                style={{ textDecoration: 'none' }}
            >
                <Card stateCityName={stateCityName} restaurant={restaurant} key={restaurant.data.id} />
            </Link>)
        })}
    </div>

export default CardContainerComponent;    