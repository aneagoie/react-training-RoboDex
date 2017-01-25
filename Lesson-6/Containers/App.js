import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { apiCall } from '../api/api';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      robots: [],
      isPending: true
    }
  }
  componentWillMount() {
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        this.setState({
          robots: response,
          isPending: false
        })
      )
  }

  onSearchChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }

  render() {
    const { searchTerm, robots, isPending } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          {isPending ? <h2>Loading...</h2> : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    );
  }
}

export default App;
