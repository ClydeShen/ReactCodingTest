import React, { Component } from 'react';
import Slider from './components/Slider.jsx'
import PriceTag from './components/PriceTag.jsx'
import RadioButton from './components/RadioButton.jsx'
import SwitchButton from './components/SwitchButton.jsx'

import style from './css/main.css'
class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedOption: "NZD",
         Yearly: false,
         usage: 100,
         currencyRate: 1,
         GOLD: {
            currentPrice: 9.99,
            oldPrice: 4.99,
         },
         SILVER: {
            currentPrice: 5.99,
            oldPrice: 4.99,
         },
         BASIC: {
            currentPrice: 0,
            oldPrice: 0,
         }
      }
      this.priceTag = ["GOLD", "SILVER", "BASIC"]

   }

   updateRadio(val) {
      let rate = 1;
      switch (val) {
         case "USD":
            rate = 0.8;
            break;
         case "EUR":
            rate = 0.5;
            break;
         case "NZD":
            rate = 1;
            break;
      }
      this.setState({ selectedOption: val, currencyRate: rate }, this.setFinalPrice.bind(this))
   }
   updateSwitch(val) {
      this.setState({ Yearly: val }, this.setFinalPrice.bind(this))
   }
   updateSlider(usage) {
      this.setState({ usage: usage }, this.setFinalPrice.bind(this))
   }
   calculatePrice(tag, usage, isYearly, currencyRate) {
      let currentPrice = 0, oldPrice = 0;
      switch (tag) {
         case "SILVER":
            currentPrice = 5.99;
            oldPrice = 4.99;
            break;
         case "GOLD":
            currentPrice = 9.99;
            oldPrice = 4.99;
            break;
         default:
            currentPrice = 0;
            oldPrice = 0;
            break;

      }
      currentPrice = currentPrice * (usage / 100) / currencyRate;
      currentPrice = isYearly ? (currentPrice * 12) : currentPrice
      currentPrice = parseFloat(currentPrice.toFixed(2));

      oldPrice = oldPrice * (usage / 100) / currencyRate;
      oldPrice = isYearly ? (oldPrice * 12) : oldPrice;
      oldPrice = parseFloat(oldPrice.toFixed(2));
      this.setState({
         [tag]: {
            currentPrice: currentPrice,
            oldPrice: oldPrice,
         }
      })
   }
   setFinalPrice() {
      for (let tag of this.priceTag) {
         this.calculatePrice(tag, this.state.usage, this.state.Yearly, this.state.currencyRate)
      }
   }
   render() {
      return (
         <div className="line h-100 app">
            <div className="auto-30 text-center left">
               <h1 >SIGN UP</h1>
               <div className="radio-container">
                  <RadioButton selectedOption={this.state.selectedOption} updateRadio={this.updateRadio.bind(this)}></RadioButton>
               </div>
               <div className="switch-container">
                  <SwitchButton isChecked={this.state.Yearly} updateSwitch={this.updateSwitch.bind(this)}></SwitchButton>

               </div>
            </div>
            <div className="auto-70 right">
               <Slider range={this.state.usage} updateSlider={this.updateSlider.bind(this)}></Slider>
               <div className="line padding-top15 ">

                  {this.priceTag.map((item, index) => {
                     return (
                        <div key={index} className="auto-33 text-center"><PriceTag type={item}
                           currentPrice={this.state[item].currentPrice}
                           oldPrice={this.state[item].oldPrice}
                           currency = {this.state.selectedOption}
                           Yearly = {this.state.Yearly}
                           usage = {this.state.usage}
                        ></PriceTag></div>
                     )
                  })}
               </div>
               <p className="note smler-text pull-right">* A one-time application fee applies.</p>
            </div>
         </div>
      );
   }
}

export default App;