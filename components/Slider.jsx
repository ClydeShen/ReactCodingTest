import React, { Component } from 'react';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 100,
            sliderStyle: ""
        }
    }
    componentWillMount() {
        let persent = (this.props.range - 100) / 200;
        let gradient = "-webkit-gradient( linear, left top, right top, color-stop(" + persent + ", #2842d5 ), color-stop(" + persent + ", #D5DBFF))"
        this.setState({ range: this.props.range, sliderStyle: gradient });
    }
    _handleChange(changeEvent) {
        let min = parseInt(changeEvent.target.min);
        let max = parseInt(changeEvent.target.max);
        let rangeVal = parseInt(changeEvent.target.value);
        let persent = (rangeVal - min) / (max - min);
        let gradient = "-webkit-gradient( linear, left top, right top, color-stop(" + persent + ", #2842d5), color-stop(" + persent + ",  #D5DBFF))"
        this.setState({
            range: rangeVal,
            sliderStyle: gradient
        });
        this.props.updateSlider(rangeVal)
    }
    render() {
        const styles = {
            containerStyle: {
                backgroundImage: this.state.sliderStyle,
            }
        };
        const { containerStyle } = styles;

        let inputStyle = this.state.sliderStyle;
        return (
            <div className="slider">
                <div className="imageCount around bg-white margin-auto">
                    <span className="text-center sm-text">
                        {this.state.range}
                        <br />
                        Images
                        <br />
                        per month
                    </span>
                </div>
                <p className="sm-text text-bold" style={{opacity:0.8}}>USAGE</p>
                <input className="auto" type="range" min="100" max="300" step="100"
                    style={containerStyle}
                    value={this.state.range}
                    onChange={this._handleChange.bind(this)} />

                <div className="range-labels text-center" style={{opacity:0.8}}>
                    <span className="pull-left sm-text">S</span>
                    <span className="sm-text">M</span>
                    <span className="pull-right sm-text">L</span>
                </div>

            </div>
        );
    }
}

export default Slider;