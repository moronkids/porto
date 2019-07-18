// basic react
import React, { Component } from 'react';
import './App.css';
import Person from './component_person/Person';
import Navbar_x from './component_person/Navbar';
import Landing from './component_person/landingpage';
import Footer from './component_person/footer';
import './component_person/css/footer/demo.css';
// import './component_person/css/footer/footer-basic-centered.css';
import './component_person/css/footer/footer-distributed-with-address-and-phones.css';
// import './component_person/css/footer/footer-distributed-with-contact-form.css';
// import './component_person/css/footer/footer-distributed-with-search.css';
// import './component_person/css/footer/footer-distributed.css';
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
      <div className='App' >
        <Navbar_x/>
        
          <div style={{  
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h1 className='teks' style={{paddingBottom:"150px"}}>"Hi, this website build with React :)"</h1>
          <Landing />
          
          </div>
          <Footer></Footer>
        </div>
    )
  }
}
export default App;
