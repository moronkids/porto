// basic react
import React, { Component } from 'react';
import './App.css';
import Person from './component_person/Person';
import Navbar_x from './component_person/Navbar';
//menggunakana component apabuila class
import Background from './image/20180810_135105.jpg'
class App extends Component {
  state = {
    persons: [
      {name: 'Ardani', age: 23},
      {name: 'Astuti', age: 21},
      {name: 'Risma', age: 21}
    ],
    otherState: "another value"
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked !');
    // this.state.persons[0].name = "Test" -> keliru
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Astuti', age: 21},
        {name: 'Risma', age: 21}
      ]
     })
  }
  handleClickOutside = () => {
    console.log('tes');
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Ardani', age: 23},
        {name: event.target.value, age: 21},
        {name: 'Risma', age: 21}
      ]
     })
  }




  render () {
    return(
      <div className='App' style={{  
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Navbar_x/>
        <h1>Hi, I'am React App</h1>
        <button className="btn btn-primary" onClick={this.switchNameHandler.bind(this, "Kontol2")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          hobbies: coding
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>
          hobbies: sleeping
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          hobbies: goodies
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          hobbies: goodies
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          hobbies: goodies
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          hobbies: goodies
        </Person>

        
      </div>
    )
  }
}
export default App;
