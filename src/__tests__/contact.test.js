import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("contact page test cases", () => {

    it("should load contact component", () => {

        render(<Contact />)
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    
        
    })
    
    it("should have button", () => {
        render(<Contact />)
    
        const button = screen.getByText("Button text")
    
        expect(button).toBeInTheDocument()
    })

    it("should load input inside contact component", () => {
        render(<Contact />)

        const input = screen.getAllByRole("textbox")

        expect(input.length).toBe(2)
    })
})

