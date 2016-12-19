import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import Scroll from './Scroll';

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
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json().then(data =>
        this.setState({
          robots: data,
          isPending: false
        })
      )
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
