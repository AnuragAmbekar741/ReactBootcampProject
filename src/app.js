import React from 'react'
import ReactDOM from 'react-dom/client'

//Creating h1 tag with React
// const heading = React.createElement("h1", { id: "heading" }, 'React World says Hi!')

//react compononet with child elements
//     const heading = React.createElement('div', { id: "title" }, [
//     React.createElement('h1', { id: "heading" }, "Namste React Bootcamp"),
//     React.createElement('h2', {}, "zero to her"),
//     React.createElement('h3', {}, "in 3 months")
// ])

//JSX
const noOfMonths = 3;
const heading = (<div id='title' className='title-class' tabIndex='1'>
    <h1>Namaste React</h1>
    <h2>Zero to hero</h2>
    <h3>In {noOfMonths} Months</h3>
</div>)

//Functional Component
// const HeadComponent = () => {
//     return React.createElement('h1', { id: "title" }, "Hello React Component!")
// }

const TitleComponent = () => { return <h1>Namste React Bootcamp</h1> }

const HeadingComponent = () => {
    return (<div id='title' className='title-class' tabIndex='1'>
        <TitleComponent />
        <h2>Zero to hero</h2>
        <h3>In {noOfMonths} Months</h3>
    </div>)
}

//Creating Root on ReacDOM
const root = ReactDOM.createRoot(document.getElementById('root'))

//Rendering the root element
root.render(<HeadingComponent />)


// console.log(<HeadingComponent />)  obj
// console.log(HeadingComponent)    function body{}
// console.log(HeadingComponent()) obj

//But we cant ship it to production -> missing -> bundling,packaging -> (NPM) 