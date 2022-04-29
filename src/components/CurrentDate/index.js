import React from 'react';

export default class CurrentDate extends React.Component {
    constructor() {
        super();

        this.state = {
            time: Date.now()
        };

        setInterval(() => this.setState({
            time: Date.now()
        }), 100);
    }

    render() {
        const dt = new Date();

        return (
            <div>
                <div>{ this.state.time }</div>
                <div>{ dt.getDate() } - { dt.getMonth() + 1 } - { dt.getFullYear() }</div>
            </div>
           
        );
    }
}