import React from 'react';

export default class Conter extends React.Component {
    state = { count: 0};
    render() {
        return(
            <div>
                <div data-testid="result">{this.state.count}</div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                </button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    -
                </button>
            </div>
        )
    }
};
