import React, { useState } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurentsInfo from "./components/RestaurentsInfo"
import { Suspense, lazy } from "react"
import userContext from "./utils/userContext"
import { Provider } from "react-redux"
import store from "./utils/store"
import Cart from "./components/Cart"
import Login from "./components/Login"
import CommingSoon from "./components/CommingSoon"

const Glocery = lazy(() => import('./components/Grocery'))


const AppLayout = () => {
    const [userName, setUserName] = useState("")
    return (
        <Provider store={store}>
        <userContext.Provider value={{ userInfo: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
            
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },  
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><CommingSoon /></Suspense>,
            },
            {
                
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/restaurents/:resid",
                element: <RestaurentsInfo />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


// React.createElement("h1", {}, "this is heading")
// this is how elements are created in react
