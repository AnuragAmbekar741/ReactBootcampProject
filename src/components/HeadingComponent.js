
import UserContext from './UserContext'

import { Link } from 'react-router-dom'

import { useContext } from 'react'

import { useSelector } from 'react-redux'

const HeadingComponent = () => {

    const cartItems = useSelector((store) => store.cart.value)

    const count = cartItems.length

    const { email, setEmail } = useContext(UserContext)

    return (
        <>
            <div id='title' className='flex justify-between px-10 py-4 align-middle bg-purple-100'>
                {/* <h2 className="font-bold text-5xl m-5" >{heading}</h2> */}
                <Link to={'/'}> <img className='h-12' src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png" />
                </Link>
                <div className='flex space-x-5 m-3 cursor-pointer'>
                    <Link to={'/search'} >Search</Link>
                    <Link to={'/about-us'} >About</Link>
                    <Link to={'/todo'} >Todo</Link>
                    <Link to={'/budgeting'} >Budgeting App</Link>
                    <Link>Support</Link>
                    <Link to={'/cart'} >Cart - {count} items</Link>
                    <Link to={'/wordle'} >Wordle</Link>
                    <Link to={'/Home'} >Home</Link>
                </div>
            </div>

        </>
    )

}

export default HeadingComponent