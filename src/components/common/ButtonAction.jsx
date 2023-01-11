import React from "react"

class ButtonAction extends React.Component {
    state = {
        buttonOn: false,
    };

    render() {
        const isOn = this.state.buttonOn;

        return (
            <button onClick={() => this.setState({ buttonOn: !isOn })} className={isOn ? "buttons on" : "buttons"}
                {...this.props} />
        )
    }
}

export default ButtonAction;