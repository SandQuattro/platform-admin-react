import React from 'react';
import './MenuToggle.css'

const MenuToggle = (props) => {

    const cls = [
        'MenuToggle'
    ];

    if (props.isOpen) {
        cls.push('close link icon open');
    } else {
        cls.push('bars icon');
    }

    return (
        <i className={cls.join(' ')} onClick={props.onToggle}/>
    );

};

export default MenuToggle;