import React, { Component } from 'react';

export class FetchTest extends Component {
  static displayName = FetchTest.name;

  constructor(props) {
    super(props);
    this.state = { forecasty: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }
  
  static renderForecastsTable(forecastys) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecastys.map(forecasty =>
            <tr key={forecasty.date}>
              <td>{forecasty.date}</td>
              <td>{forecasty.temperatureC}</td>
              <td>{forecasty.temperatureF}</td>
              <td>{forecasty.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchTest.renderForecastsTable(this.state.forecasty);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasty: data, loading: false });
  }
}

export default FetchTest;