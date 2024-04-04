import React, { Component } from 'react';
import './ListItem.css';

let taskData

function ListItem({task}) {
    return (
        <div style={{backgroundColor: 'blue', width: '600px', marginLeft: 'auto', marginRight: 'auto', padding: '5px 0px', marginBottom: '20px'}} >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
        </div>
    );
}

export default ListItem;