import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robotInfo: [],
      searchTerm: '',
      isPending: true
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json().then(data =>
        this.setState({
          robotInfo: data,
          isPending: false
        })
      )
    )
  }

  onSearchChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    })
  }
  render () {
    const {
      searchTerm,
      robotInfo,
      isPending
    } = this.state;
    const searchRobots = robotInfo.filter(robot =>
      robot.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    return (
      <div className='mw6 center'>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          {isPending ? <h2>Loading...</h2> : <CardList cardData={searchRobots} />}
        </Scroll>
      </div>
    )
  }
}

export default App
