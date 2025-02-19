import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';

import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       string: 'Hello Sir! This is TARS.'
//     };
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <p>{this.state.string}</p>
//           <button onClick={() => this.setState({ string : 'Hello from Interstellar Bot'})}>Learn React</button>
//         </header>
//       </div>
//   );
// }
// }
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
        <input 
          type='search' 
          placeholder='search monsters'
          onChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters = {filteredMonsters} /> {/* Anything we pass inside CardList element is a prop and will pass as a parameter(prop) into CardList element*/}    
      </div>
    );
  }
}
export default App;
