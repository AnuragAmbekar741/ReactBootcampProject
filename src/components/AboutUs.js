import { Outlet } from "react-router-dom"
import { Component } from 'react'

import UserContext from "./UserContext";

// const AboutUs = () => {
//     return (
//         <>
//             <h1>About Us</h1>
//             <Outlet />
//         </>
//     )
// }

class AboutUs extends Component {

    constructor(props) {
        super(props);
        console.log('about - constructor')
    }

    componentDidMount() {
        console.log('about - componentDidMount')
    }

    render() {
        console.log('about - render')
        return (<>
            <UserContext.Consumer>
                {({ email, setEmail }) => {
                    return (<>
                        <h4>{email}</h4>
                        <button onClick={() => {
                            setEmail('updated email from - About using useContext')
                        }}>Update</button>
                    </>)
                }}
            </UserContext.Consumer>
            <h1>About us</h1>
            <Outlet />
        </>)
    }
}

export default AboutUs