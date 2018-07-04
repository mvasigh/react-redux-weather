import React, { Component } from 'react';
import LineChart from '../components/line_chart';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData, i) {
    const data = {};
    const keys = ['temp', 'pressure', 'humidity'];
    keys.forEach(key => {
      data[key] = cityData.list.map(entry => entry.main[key]);
    });

    return (
      <tr key={i}>
        <td>{cityData.city.name}</td>
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
