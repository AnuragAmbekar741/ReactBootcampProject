import React from 'react'
import ReactDOM from 'react-dom/client'
import Pov from './Pov'
import Navbar from './Navbar'
import CardContainer from './CardContainer'

const Index = () => {
    return (
        <>
            <Navbar />
            <Pov />
            <CardContainer />
        </>
    )
}

//Creating Root on ReacDOM
const root = ReactDOM.createRoot(document.getElementById('root'))

//Rendering the root element
root.render(<Index />)