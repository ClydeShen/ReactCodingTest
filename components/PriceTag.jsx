import React, { Component } from 'react';


class PriceTag extends Component {
    constructor(props) {
        super(props);
    }
    showPrice() {
        let dollor=(this.props.currency==="EUR"? "eur":"dollar")

        return (<div>
            <strike className={"text-thin margin-auto "+dollor} >
                {this.props.oldPrice}</strike>
            <div className={"auto current-price text-thin "+dollor}>
                {this.props.currentPrice}
            </div>
            <div className="sm-text margin-top10">{this.props.currency} per {this.props.Yearly ? 'year' : 'month'}</div>
        </div>
        );
    }
    onPlanClick(){
        let dollorSign = this.props.currency=="EUR"? "€":"$";
        let plan="You chose "+this.props.type +" plan. \n";
        plan+="Plan Detail: \n";
        plan+="usage: "+this.props.usage +" per month \n";
        plan+="Total: "+this.props.currency+dollorSign+this.props.currentPrice +" per "+(this.props.Yearly? 'Year':'Month');

        console.log(plan)
        alert(plan)
    }
    render() {
        return (
            <div className="price-tag margin-auto">
                <div className="box padding-15 margin-auto">
                    <div className="text-bold title">{this.props.type}</div>
                    {this.props.currentPrice == 0 ? <div className="free text-thin">FREE</div> : this.showPrice()}
                </div>
                <div className="around choose margin-auto text-bold" onClick={this.onPlanClick.bind(this)}>
                    <span>CHOOSE</span>
                </div>
            </div>
        );
    }
}

export default PriceTag;