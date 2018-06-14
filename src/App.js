import React, { Component } from 'react';
import Header from './Components/Header';
import DaySelector from './Components/DaySelector';
import Restaurant from './Components/Restaurant';

import SampleScenario from './Scenarios/deliveries-sample.json'

import './App.css';

// Create a list of days that have order options
const DaysList = SampleScenario.dropoffs.filter((obj) => Array.isArray(obj.deliveries) && obj.deliveries.length).map((obj) => obj.day);

//Set up data here so that we can just get the deliveries by day without searching for them
let DeliveriesByDay = {};
SampleScenario.dropoffs.forEach((obj) => {
  DeliveriesByDay[obj.day] = obj.deliveries;
});


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { displayDay: 'Monday'}
    this.changeActiveDay = this.changeActiveDay.bind(this);
  }

  changeActiveDay(day) {
    if(DaysList.includes(day)) {
      this.setState({displayDay: day});
    }
  }

  render() {
    return (
      <div className="foodsby-code-challenge">
        <Header />
        <DaySelector daysList={DaysList} currentDay={this.state.displayDay} clickHandler={this.changeActiveDay} />
        {DeliveriesByDay[this.state.displayDay].map((restaurantData) => <Restaurant {...restaurantData} key={restaurantData.storeId} />)}
      </div>
    );
  }
}

export default App;
