import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      robots: robots
    }
  }
  onSearchChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }
  render() {
    const { searchTerm, robots } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div>
      <SearchBox onSearchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
