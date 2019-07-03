import React, { Component } from 'react'
import firebase from 'firebase';
// import TaskList from './TaskList';
// import InputTask from './InputTask';

import List from './List';
import DataBox from './DataBox';

import './Work.css';
class Work extends Component {
    // state = {
    //     tasks: [{ id: 1, task: 'Do homework', address: 'Phusket', date: '2019-2-14' },
    //     { id: 2, task: 'Read book', address: 'BKK', date: '2019-2-15' }],
    //     id: 3
    // }
    // addTask = (task, address, date) => {
    //     this.setState({
    //         tasks: [...this.state.tasks, { id: this.state.id, task, address, date }],
    //         id: this.state.id + 1
    //     })
    // }
    constructor(props){super(props); var firebaseConfig = {
        apiKey: "AIzaSyDlNPwx6RpaPemi1997pc1OhszkzwEu_io",
        authDomain: "newtest-2d8cf.firebaseapp.com",
        databaseURL: "https://newtest-2d8cf.firebaseio.com",
        projectId: "newtest-2d8cf",
        storageBucket: "newtest-2d8cf.appspot.com",
        messagingSenderId: "479905756044",
        appId: "1:479905756044:web:b7a47b748f5728f5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
    render() {

        return (
            <div>
                <div className="header-image"></div>
                <h1 className="work">MY WORK</h1>
                {/* <div>
                    <TaskList tasks={this.state.tasks} />
                    <InputTask addTask={this.addTask} id={this.state.id} />
                </div> */}

                <div>
                    <List db={firebase}/>
                    <DataBox db={firebase}/>

                </div>

            </div>
        )
    }
}
export default Work;