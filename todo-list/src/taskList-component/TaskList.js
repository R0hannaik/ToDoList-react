import React from 'react';
import './TaskList.scss'

function TaskList(props) {

   const hanldeOnClick = event => {
        event.tagName === 'BUTTON' ? props.taskListCallBack(event) :props.taskListCallBack(event.parentNode)
    }

    return (
        <div className='TaskList'>
            <ul>
                {props.tasks.map((task, key) => {
                    return (
                        <React.Fragment key={key}>
                            <li>
                                <div>
                                    <div className="taskList-task">
                                        {task.status===true ? <del>{task.task}</del>: task.task}
                                    </div>
                                    <div className="taskList-Button">
                                        <div>
                                            <button name={`info-${key}`} style={{color:"white"}} className='taskList-button-svg' onClick={(event)=> {hanldeOnClick(event.target)}}>
                                                <span>
                                                    &#10069;
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            <button onClick={(event)=> {hanldeOnClick(event.target)}} style={{color:"white",textAlign:"center",fontSize:'18px'}}  className='taskList-button-svg' name={`status-${key}`}>
                                            {
                                                task.status === true ?
                                                <span>&#8722;</span>
                                            :
                                            <span>&#10004;</span>
                                            }
                                            </button>
                                        </div>
                                        <div>
                                            <button className='taskList-button-svg' style={{color:'white', fontSize:'18px'}} onClick={(event)=> {hanldeOnClick(event.target)}} name={`delete-${key}`}>
                                                <span>
                                                    &#10007;
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </React.Fragment>)
                    })}
            </ul>
        </div>
    )
}

export default TaskList;
