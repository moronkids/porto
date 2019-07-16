import React from 'react';
import './css/Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p>I'am a Programmer ! my name {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
    
};

export default person;