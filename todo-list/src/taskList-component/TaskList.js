import React from 'react'

function TaskList(props) {
    const hanldeOnClick = event => props.taskListCallBack(event.target)
    return (
        <div>
            <ul>
                {props.tasks.map((task, key) => {
                    return (
                        <React.Fragment key={key}>
                            <li>{task.status===true ? <del>{task.task}</del>: task.task}  
                                <button onClick={hanldeOnClick} name={`info-${key}`}>Info</button>
                                <button onClick={hanldeOnClick} name={`status-${key}`}>{task.status === true ? 'Undone': 'Done'}</button>
                                <button onClick={hanldeOnClick} name={`delete-${key}`}>Delete</button>
                            </li>
                        </React.Fragment>)
                    })}
            </ul>
        </div>
    )
}

export default TaskList;