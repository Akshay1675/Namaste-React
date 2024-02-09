import { sum } from "../components/sum"

test("testing sum of two numbers", () => {

    const res = sum(1,5)

    expect(res).toBe(6)
})