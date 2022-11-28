import logo from './RheaVaniaLogo-removebg-preview.png'
import shoppingcart from './cart-icon.png'

const Navbar = () => {
    return (<div className='navbar'>
        <img className='brandlogo' src={logo} alt="" />
        <div className='navlinks'>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
        </div>
        <img className='cartlogo' src={shoppingcart} alt="" />
    </div>)
}

export default Navbar;