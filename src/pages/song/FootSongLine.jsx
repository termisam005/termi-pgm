import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


class FootSongLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    onSliderChange = value => {
        this.setState(
            { value },
            () => { console.log(this.state.value); }
        );
    };

    render() {
        return (
            <div className="progress_bar fplay_progress">
                <Slider min={0} max={100}
                    onChange={this.onSliderChange}
                    railStyle={{ height: 10 }}
                    handleStyle={{
                        height: 18,
                        width: 18,
                        marginLeft: 0,
                        marginTop: -11,
                        backgroundColor: "#304095",
                        border: 4,
                        borderStyle: "solid",
                        borderColor: "#304095",
                    }}
                    trackStyle={{
                        height: 6,
                        top: 0,
                        background: "#ff4f19",
                    }}
                />
            </div>
        )
    }
}

export default FootSongLine;