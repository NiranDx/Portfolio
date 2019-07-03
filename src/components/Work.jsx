import React, { Component } from 'react'
import TaskList from './TaskList';
import InputTask from './InputTask';

import './Work.css';
class Work extends Component {
    state = {
        tasks: [{ id: 1, task: 'Do homework', address: 'Phusket', date: '2019-2-14' },
        { id: 2, task: 'Read book', address: 'BKK', date: '2019-2-15' }],
        id: 3
    }
    addTask = (task, address, date) => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.id, task, address, date }],
            id: this.state.id + 1
        })
    }
    render() {

        return (
            <div>
                <div className="header-image"></div>
                <h1 className="work">MY WORK</h1>
                <div>
                    <TaskList tasks={this.state.tasks} />
                    <InputTask addTask={this.addTask} id={this.state.id} />
                </div>

            </div>
        )
    }
}
export default Work;