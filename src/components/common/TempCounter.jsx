import React, { Component } from "react";
import ButtonWith from "./ButtonWith";


class TempCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            minusClickCount: 1
        };
        this.minusOne = this.minusOne.bind(this);
        this.plusOne = this.plusOne.bind(this);
    }
    minusOne() {
        this.setState({
            count: this.state.count === 0 ? this.state.count : this.state.count - 1
        });
    }
    plusOne() {
        this.setState({
            count: this.state.count === 10 ? this.state.count : this.state.count + 1
        });
    }

    render() {
        return (
            <div className="temp_count">
                <ButtonWith onClick={this.minusOne} class="btsq bt30 norm" src="../resources/images/sv_arr20_minus_wh.png" />
                <Counter counter={this.state.count} />
                <ButtonWith onClick={this.plusOne} class="btsq bt30 norm" src="../resources/images/sv_arr20_plus_wh.png" />
            </div>
        );
    }
}

const Counter = Counter => ({
    render() {
        return <p className="temp_number">{this.props.counter}</p>;
    }
});

export default TempCounter;


