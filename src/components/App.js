import React, { Component } from 'react';
import './App.css';
import ZipForm from './ZipForm';
import WeatherList from './WeatherList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      city: {},
      dates: [],
      selectedDate: null
    };
    this.url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
    this.apikey = "&units=imperial&appid=c59493e7a8643f49446baf0d5ed9d646";

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">
      <ZipForm onSubmit={this.onFormSubmit} />
      <WeatherList days={this.state.dates} />
      </div>
    );
  }

  onFormSubmit(zipcode) {
    fetch(`${this.url}${zipcode}${this.apikey}`) // was this.state.zipcode
      .then(response => response.json())
      .then(data => {
        const {city, list: dates } = data; // destructuring assignment
        this.setState({zipcode, city, dates, selectedDate: null});
        // call setstate – wil call render to update virtual dom
      })
      .catch(error => {
        alert('There was a problem getting info!');
      });
    }
}


export default App;
