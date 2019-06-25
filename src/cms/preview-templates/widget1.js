import React, { Component } from 'react';

export class CustomInputControl extends Component {
  getValue() {
    return this.props.value ? this.props.value.join(', ') : '';
  }

  handleSlideChange(event) {
    this.props.onChange(
      event.target.value.split(',').map((e) => e.trim())
    );
  }

  render() {
    return (
      <div>
        <input style={{ padding: 5, border: `1px solid #555` }} type="text" value={this.getValue()} onChange={value => this.handleSlideChange(value)}></input>
      </div>
    )
  }
}

export const CustomInputPreview = props => (
  <ul>
    {props.value
      .map((val, i) => <li key={i}>{val}</li>)}
  </ul>
);