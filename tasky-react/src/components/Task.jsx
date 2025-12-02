import React from 'react';

const Task = (props) => {
    
    return (
        <div className={`card ${props.priority} ${props.done ? 'done' : ''}`}>
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <p className='priority'>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
        </div>
    )
}

export default Task;