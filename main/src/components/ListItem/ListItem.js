import React, { Component } from 'react';
import './ListItem.css';

function ListItem({task}) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
}

export default ListItem;