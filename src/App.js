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

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
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
