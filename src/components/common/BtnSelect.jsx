import React, { Component } from "react";

class BtnSelect extends Component {

    state = {
        isToggleOn: false,
    }

    render() {
        const isOn = this.state.isToggleOn;

        return (
            <button className={isOn ? "btn_md1 box on" : "btn_md1 box"} onClick={() => this.setState({ isToggleOn: !isOn })}
                {...this.props} />
        );
    }
}

export default BtnSelect;