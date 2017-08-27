import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    return this.setState(({ count }) => {
      console.log('oldCount', count); // eslint-disable-line
      console.log('newCount', count + 1); // eslint-disable-line
      return { count: count + 1 };
    });
  }
  decrement() {
    return this.setState(({ count }) => ({ count: count - 1 }));
  }

  // increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  // decrement = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>

        <button type="button" onClick={this.increment}>
          +
        </button>

        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
