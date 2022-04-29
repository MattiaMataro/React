import React from "react";

export class LightSwitch extends React.Component {
    constructor() {
        super();

        this.state = {
            isOn: false
        };
    }

    render() {
        const lightSwitchClass = this.state.isOn ? 'light on' : 'light';

        return (
            <div>
                <div className={lightSwitchClass}>{ this.state.isOn }</div>
                <button onClick={this.toggleSwitch}>Toggle</button>
            </div>
        );
    }

    toggleSwitch = () => {
        this.setState({
            isOn: !this.state.isOn
        });
    }
}

export default LightSwitch;