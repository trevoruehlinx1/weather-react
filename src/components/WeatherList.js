import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component{


    render () {
        const { days } = this.props;
        return(
            <div className="weather-list flex-parent">
                {days.map((day, index) =>
                <WeatherListItem
                    key={day.dt}
                    day={day}
                    index={index} 
                    onDayClick={this.props.onDayClick}
                />)}
            </div>
        );
    }

}
export default WeatherList;