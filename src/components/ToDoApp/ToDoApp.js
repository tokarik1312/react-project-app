import React from 'react';
import PropTypes from 'prop-types';
import './ToDoApp.css';
import ToDoGrid from '../ToDoGrid/ToDoGrid'
import ToDoEditor from '../ToDoEditor/ToDoEditor';
import ToDoFilter from '../ToDoFilter/ToDoFilter';

class ToDoApp extends React.Component {

  constructor() {
    super()

    this.state = {
     
      tasks: [],
      condition: ''
      
    }

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleCheckTask = this.handleCheckTask.bind(this)
    this.handleNewTasks = this.handleNewTasks.bind(this)
    this.handleFinishedTasks = this.handleFinishedTasks.bind(this)
    this.handleAllTasks = this.handleAllTasks.bind(this)
  }

  componentDidMount() {
    // get 
    let localTasks = JSON.parse(localStorage.getItem('tasks'))
    if (localTasks)
      this.setState({ tasks: localTasks})
  }

  componentDidUpdate() {
    // set
    let tasksStr = JSON.stringify(this.state.tasks)
    localStorage.setItem('tasks', tasksStr)

  }


  handleAddTask(newTask) {

    let newList = this.state.tasks.slice()
    newList.unshift(newTask)
    this.setState({
      tasks: newList
    })

  }

  handleDeleteTask(id) {
    let newTasks = this.state.tasks.filter(el => el.id != id)
    this.setState({
      tasks: newTasks
    })

  }

  handleCheckTask(newStyle, myTask, myId) {
    if (newStyle) {

      let removedTask = {
        id: Date.now(),
        task: myTask,
        myCheck: 'checked',
        status: 'finished',
        divStyle: {
          textDecoration: 'line-through'
        }
      }


      let newList = this.state.tasks.slice()
      newList.push(removedTask)
      this.setState({
        tasks: newList.filter(el => el.id != myId)
      })


    } else {

      let renewedTask = {
        id: Date.now(),
        task: myTask,
        myCheck: '',
        status: 'new',
        divStyle: {
          textDecoration: 'none'
        }
      }

      let newList = this.state.tasks.slice()
      newList.unshift(renewedTask)
      this.setState({
        tasks: newList.filter(el => el.id != myId)
      })

    }
  }

  handleNewTasks() { 
    this.setState({
      condition: 'finished'
    })
  }

  handleFinishedTasks() {
    this.setState({
      condition: 'new'
    })
  }

  handleAllTasks() {  
    this.setState({
     condition: null
    })
  }


  render() {
    return (
      <div>
        <ToDoEditor onTaskAdd={this.handleAddTask} /> 
        <ToDoFilter onTasksNew={this.handleNewTasks} onTasksFinished={this.handleFinishedTasks} onTasksAll={this.handleAllTasks}/>   
        <ToDoGrid
          onTaskDelete={this.handleDeleteTask}
          onTaskCheck={this.handleCheckTask}
          tasks={this.state.tasks}
          condition={this.state.condition}
        />
      </div>
    )
  }
}

ToDoApp.propTypes = {};

ToDoApp.defaultProps = {};

export default ToDoApp;
