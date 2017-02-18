/**
 * Created by miketran on 2/13/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';


class WeatherList extends Component {

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        let temperature = [];
        let humidity = [];
        let pressure = [];
        const {lon, lat} = cityData.city.coord;
        let dataPoint = cityData.list.forEach(item => {
                temperature = [item.main.temp, ...temperature];
                humidity = [item.main.humidity, ...humidity];
                pressure = [item.main.pressure, ...pressure];
        });

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temperature} color='green' units="K"/></td>
                <td><Chart data={pressure} color='red' units="hPa"/></td>
                <td><Chart data={humidity} color='blue' units="%"/></td>
            </tr>
        );
    };


    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);