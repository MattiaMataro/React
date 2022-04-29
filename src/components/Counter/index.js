import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cnt: props.start || 0  
        };
    }

    handleCounter = isSum => {
        this.setState({
            cnt: isSum ? this.state.cnt + 1 : this.state.cnt - 1
        });
    }

    render() {
        return (
            <div>
                <p>{ this.state.cnt }</p>
                <button onClick={() => this.handleCounter(false)}>-</button>
                <button onClick={() => this.handleCounter(true)}>+</button>
            </div>
        );
    }
}

export default Counter;