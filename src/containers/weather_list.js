import React, { Component } from 'react';
import LineChart from '../components/line_chart';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const data = {};
    const keys = ['temp', 'pressure', 'humidity'];
    keys.forEach(key => {
      data[key] = cityData.list.map(entry => entry.main[key]);
    });
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        {Object.values(data).map((entry, i) => (
          <td key={i}>
            <LineChart data={entry} limit={10} width={120} height={80} />
          </td>
        ))}
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
