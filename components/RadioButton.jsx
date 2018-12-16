import React, { Component } from 'react';


class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "NZD"
        }
        this.radios = ["USD", "EUR", "NZD"]
    }
    _handleRadioChange(changeEvent) {
        this.setState({selectedOption: changeEvent.target.value});
        this.props.updateRadio(changeEvent.target.value)
    }
    render() {
        return (
            <div className="radio-button line">
                <div className="radio auto-33 text-left">
                    <input type="radio" value="USD" id="usd"
                        checked={this.state.selectedOption === 'USD'}
                        onChange={this._handleRadioChange.bind(this)} />

                    <label htmlFor="usd" className="sm-text"><i></i><span>USD</span></label>
                </div>
                <div className="radio auto-33">
                    <input type="radio" value="EUR" id="eur"
                        checked={this.state.selectedOption === 'EUR'}
                        onChange={this._handleRadioChange.bind(this)} />
                    <label htmlFor="eur" className="sm-text"><i></i><span>EUR</span>
                    </label>
                </div>
                <div className="radio auto-33 text-right">
                    <input type="radio" value="NZD" id="nzd"
                        checked={this.state.selectedOption === 'NZD'}
                        onChange={this._handleRadioChange.bind(this)} />
                    <label htmlFor="nzd" className="sm-text"><i></i><span>NZD</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default RadioButton;