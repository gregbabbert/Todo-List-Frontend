import React, { Component } from 'react';
import './ListItem.css';

function ListItem({task}) {
    return (
        <div style={{backgroundColor: 'red', width: '600px', marginLeft: 'auto', marginRight: 'auto', padding: '5px 0px', marginBottom: '20px'}} >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
}

export default ListItem;