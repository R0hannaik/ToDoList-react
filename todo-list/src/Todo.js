import React, { Component } from 'react';
import Headers from './header-component/Header';
import TodoInput from './input-component/todoInput';
import TaskList from './taskList-component/TaskList';
import EditTask from './edit-component/EditTask';

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            task : [],
            update: ''
        }
    }

    getAddTaskCallback = (data) =>{
        if(data.inputForm !== ""){
            let newTaskList = this.state.task;
            newTaskList.push(data);
            this.setState({task: newTaskList});
        }
    };

    taskListCallBack = (event) =>{
        let newTask = this.state.task;
        let name = event.name.split('-')[0];
        let id = event.name.split('-')[1];
        if(newTask[id].uid !== this.state.update.uid){
            if(name !== 'info'){
                if(name === 'status'){
                    if(newTask[id].status === false){
                        newTask[id].status = true;
                    }
                    else if(newTask[id].status === true){
                        newTask[id].status = false;
                    }
                }
                else if(name === 'delete'){
                    newTask.splice(id,1);
                }
                this.setState({task: newTask})
            }
            else if(name === 'info'){
                let update = this.state.update;
                update = newTask[id];
                this.setState({update: update})
            }
        }
    }

    editFormCallback = (data) =>{
        let editTask = this.state.task;
        editTask.map((task)=>{
            if(task.uid === data.uid){
                task.task = data.task;
                task.date = data.date;
                task.status = data.status
            }
        })
        this.setState({task: editTask, update: ''})
    }
    
    render() {
        return (
            <div>
                <Headers/>
                <TodoInput getAddTaskCallback={this.getAddTaskCallback} inputForm={this.state.update}/>
                <TaskList taskListCallBack={this.taskListCallBack} tasks={this.state.task}/>
                {(this.state.update !== ''? <EditTask editFormCallback={this.editFormCallback} editForm={this.state.update}/> : null)}
            </div>
        )
    }
}

export default Todo
