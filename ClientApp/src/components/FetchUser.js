import React, { Component } from 'react';

export class FetchUser extends Component {
  static displayName = FetchUser.name;

  constructor(props) {
    super(props);
    this.state = { userData: String, loading: true };
  }

  componentDidMount() {
    this.userGetInfo();
  }
  
  static renderUserData(userDatas) {
    return ("User is :" + userDatas);
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchUser.renderUserData(this.state.userData);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async userGetInfo() {
    const response = await fetch('user');
    const data = await response.text();
    this.setState({ userData: data, loading: false });
  }
}

export default FetchUser;