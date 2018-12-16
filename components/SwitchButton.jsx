import React, { Component } from 'react';


class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }
  _handleChange(changeEvent) {
    this.setState({
      isChecked: changeEvent.target.checked
    });
    this.props.updateSwitch(changeEvent.target.checked)
  }
  render() {
    return (
      <div className="line">
        <div className="auto-33 sm-text text-left">Monthly</div>
        <div className="auto-33">
          <input className="switch" type="checkbox" id="switch"
            checked={this.state.isChecked}
            onChange={this._handleChange.bind(this)}
          /><label htmlFor="switch"></label></div>
        <div className="auto-33 sm-text text-right">Yearly</div>
      </div>

    );
  }
}

export default SwitchButton;