import React, { lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import ErrorComp from './components/ErrorComp.js'
import Restaurant from './components/Restaurant.js'
import Profile from './components/Profile.js'
import SeachComponent from './components/SearchPage.js'
import HeadingComponent from './components/HeadingComponent.js'


//LAZY LOADING WITH SUSPENSE
const AboutUs = lazy(() => import('./components/AboutUs.js'))

//Import UserContext  ====>  Provider to pass values for Consumers
import UserContext from './components/UserContext.js'


import ToDoContext from './components/todoContext/TodoApp'

import ToDoList from './components/todoList/ToDoList.js'

import BudgetApp from './components/Budgeting/BudgetApp.js'


import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import MainApp from './Wordle/MainApp.js'
import Home from './components/Home.js'

//Creating h1 tag with React
// const heading = React.createElement("h1", { id: "heading" }, 'React World says Hi!')

//react compononet with child elements
//     const heading = React.createElement('div', { id: "title" }, [
//     React.createElement('h1', { id: "heading" }, "Namste React Bootcamp"),
//     React.createElement('h2', {}, "zero to her"),
//     React.createElement('h3', {}, "in 3 months")
// ])

//JSX
// const noOfMonths = 3;
// const heading = (<div id='title' className='title-class' tabIndex='1'>
//     <h1>Namaste React</h1>
//     <h2>Zero to hero</h2>
//     <h3>In {noOfMonths} Months</h3>
// </div>)

//Functional Component
// const HeadComponent = () => {
//     return React.createElement('h1', { id: "title" }, "Hello React Component!")
// }

// const TitleComponent = () => <h1>Namste React Bootcamp</h1>

// const HeadingComponent = () => {
//     return (<div id='title' className='title-class' tabIndex='1'>
//         <TitleComponent />
//         <h2>Zero to hero</h2>
//         <h3>In {noOfMonths} Months</h3>
//     </div>)
// }



const AppLayout = () => {

    //State to update UserContext
    const [emailId, setEmailId] = useState('initailized Email - App.js')

    return (
        <>
            <Provider store={store}>
                <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
                    <HeadingComponent />
                    <div className='body'>
                        <Outlet />
                    </div>
                </UserContext.Provider>
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComp />,
        children: [
            {
                path: "/search",
                element: <SeachComponent />
            },
            {
                path: "restaurant/:id",
                element: <Restaurant />
            },
            {
                path: "/todo",
                element: <ToDoList />
            },
            {
                path: "/budgeting",
                element: <BudgetApp />
            },
            {
                path: "/wordle",
                element: <MainApp />
            },
            {
                path: "/Home",
                element: <Home />
            },

            {
                path: "/about-us",
                element: <Suspense><AboutUs /></Suspense>,
                children: [
                    {
                        path: "/about-us/Profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    }
])




//Creating Root on ReacDOM
const root = ReactDOM.createRoot(document.getElementById('root'))

//Rendering the root element
root.render(<RouterProvider router={appRouter} ></RouterProvider>)


// console.log(<HeadingComponent />)  obj
// console.log(HeadingComponent)    function body{}
// console.log(HeadingComponent()) obj

//But we cant ship it to production -> missing -> bundling,packaging -> (NPM) 