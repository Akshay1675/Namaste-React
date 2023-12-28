const header = React.createElement("div", { id:"parent" }, 
[React.createElement("div", {id:"child1"}, 
React.createElement("h1", {}, "this is heading")
), React.createElement("div", {id:"child2"}, 
React.createElement("h1", {}, "this is heading")
)])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header)


// React.createElement("h1", {}, "this is heading")
// this is how elements are created in react
