import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../utils/store"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should render header component with login button", () => {
    
    render(
        <BrowserRouter>
           <Provider store={store}>
             <Header />
           </Provider>
        </BrowserRouter>)

    const loginBtn = screen.getByRole("button", { name: "Login"})

    expect(loginBtn).toBeInTheDocument()
})

it("should render header component with cart item 0 ", () => {
    
    render(
        <BrowserRouter>
           <Provider store={store}>
             <Header />
           </Provider>
        </BrowserRouter>)

    const cartItems = screen.getByText("Cart - 0")

    expect(cartItems).toBeInTheDocument()
})

it("should change login button to logout button on click", () => {
    
    render(
        <BrowserRouter>
           <Provider store={store}>
             <Header />
           </Provider>
        </BrowserRouter>)

    const loginBtn = screen.getByRole("button", { name: "Login"})

    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole("button", { name: "Logout"})

    expect(logoutBtn).toBeInTheDocument()
})

