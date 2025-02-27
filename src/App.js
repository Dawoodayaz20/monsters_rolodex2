import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';

import { SearchBox } from './components/search-box/search-box.components';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
    }

  render(){
      // We can destructure the state object to get the monsters and searchField
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1 className='h1'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filteredMonsters} /> {/* Anything we pass inside CardList element is a prop and will pass as a parameter(prop) into CardList element*/}    
      </div>
    );
  }
}
export default App;
