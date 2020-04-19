import React from 'react';
import './Dimmer.css'

const Dimmer = (props) => {
    return (
        <div className='Dimmer' onClick={props.onClick}/>
    );
}

export default Dimmer;