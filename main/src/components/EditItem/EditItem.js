import React, { Component, useState } from 'react';
import './EditItem.css';

let taskData

function EditItem({task, index, deleteTask}) {

    const [update, setUpdate] = useState(false);

    if (!update) {
        return (
            <div style={{backgroundColor: 'green', width: '600px', marginLeft: 'auto', marginRight: 'auto', padding: '5px 0px', marginBottom: '20px'}} >
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div>
                    <button type="button">Edit</button>
                    <button type="button" onClick={() => {
                        deleteTask(index);
                        setUpdate(true);
                        }} >Delete</button>
                </div>
            </div>
        );
    }
}

export default EditItem;