import { render, screen } from "@testing-library/react"
import ResCard from "../components/ResCard"
import MockData from "../utils/Mocks/resMockData.json"
import "@testing-library/jest-dom"


it("should render rescard component with props data", () => {

    render(<ResCard resData={MockData} />)

    const name = screen.getByText("Akhtar Samosa")

    expect(name).toBeInTheDocument()
})