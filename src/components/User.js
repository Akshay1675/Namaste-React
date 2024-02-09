import React from "react"

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 11,
            count3: 38,

        }
    }



    render() {

        
        const { name, address } = this.props
        const { count } = this.state
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>-</button>
                <h1>{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 2
                    })
                }}>+</button>
                <h2>{name} </h2>
                <h3>{address} </h3>
                <h4>contact</h4>

                <h5> let's Connct !!!</h5>
                <h1> Contact Form -: </h1>


                <input /> 
            </div>
        )
    }
}

export default User