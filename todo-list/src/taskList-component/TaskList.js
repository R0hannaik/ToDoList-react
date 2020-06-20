import React from 'react';
import './TaskList.scss'

function TaskList(props) {

   const hanldeOnClick = event => {
       console.log('THis is the event', event.currentTarget)
       props.taskListCallBack(event.currentTarget)
        // event.tagName === 'BUTTON' ? props.taskListCallBack(event) :props.taskListCallBack(event.parentNode)
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
                                            <button name={`info-${key}`} style={{color:"white"}} className='taskList-button-svg' onClick={hanldeOnClick}>
                                                <span>
                                                    &#10069;
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            <button onClick={hanldeOnClick} style={{color:"white",textAlign:"center",fontSize:'18px'}}  className='taskList-button-svg' name={`status-${key}`}>
                                            {
                                                task.status === true ?
                                                <span>&#8722;</span>
                                            :
                                            <span>&#10004;</span>
                                            }
                                            </button>
                                        </div>
                                        <div>
                                            <button className='taskList-button-svg' style={{color:'white', fontSize:'18px'}} onClick={hanldeOnClick} name={`delete-${key}`}>
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
