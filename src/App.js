// basic react
import React, { Component } from 'react';
import './App.css';
import Person from './component_person/Person';
import Navbar_x from './component_person/Navbar';
import Landing from './component_person/landingpage';
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

  render () {
    return(
      <div className='App' style={{  
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Navbar_x/>
        {/* <h1 className='teks'>Hi, I'am React App</h1> */}
          <Landing ></Landing>
        </div>
    )
  }
}
export default App;
