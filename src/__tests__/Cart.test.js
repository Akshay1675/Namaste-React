import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store";
import RestaurentMenuCard from "../components/RestaurentMenuCard";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_MENU_DATA from "../utils/Mocks/resMenuMockData";
import "@testing-library/jest-dom"


// Mocking the fetch API call
global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(MOCK_MENU_DATA?.data?.items)
    })
});

// Test to check if adding an item to the cart updates the header and cart component
it("should add an item to the cart and update header and cart components", async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                
                {MOCK_MENU_DATA.data.items.map((menuData) => (
                    <RestaurentMenuCard key={menuData._id} menuData={menuData} />
                ))}
                <Cart />
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByText("Cart - 0")).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - 1")).toBeInTheDocument();

    expect(screen.getAllByTestId("cart-item").length).toBe(1);

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart - 2")).toBeInTheDocument();

    expect(screen.getAllByTestId("cart-item").length).toBe(2);



     const removeBtn = screen.getByTestId("remove-btn")

     console.log(removeBtn)

     fireEvent.click(removeBtn)

     expect(screen.getByText("Cart - 0")).toBeInTheDocument()

    //   expect(screen.getByTestId("cart-item").length).toBe(0)


});
   