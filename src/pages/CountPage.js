import React from "react";





class CountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});

    }
    // componentDidMount() {
    //     console.log(this.state.count)
    // }


    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            console.log(this.state.count)
        }
    }


    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button>-</button>
            </>
        )
    }
}

export default CountPage;


