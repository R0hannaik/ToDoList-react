import React from 'react';
import './TaskList.scss'

function TaskList(props) {

  //  const hanldeOnClick = event => props.taskListCallBack(event)

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
                                            <button name={`info-${key}`} style={{color:"white"}} className='taskList-button-svg' onClick={(event)=> {props.taskListCallBack(event);}}>
                                              &#10069;
                                            </button>
                                        </div>
                                        <div>
                                            <button onClick={(event)=> {props.taskListCallBack(event);}} style={{color:"white",textAlign:"center",fontSize:'18px'}}  className='taskList-button-svg' name={`status-${key}`}>
                                            {
                                                task.status === true ?
                                                <span>&#8722;</span>
                                            :
                                            <span>&#10004;</span>
                                            }
                                            </button>
                                        </div>
                                        <div>
                                            <button className='taskList-button-svg' style={{color:'white', fontSize:'18px'}} onClick={(event)=> {props.taskListCallBack(event);}} name={`delete-${key}`}>
                                                &#10007;
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
