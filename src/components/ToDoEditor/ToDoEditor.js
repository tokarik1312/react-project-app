import React from 'react';
import PropTypes from 'prop-types';
import './ToDoEditor.css';


class ToDoEditor extends React.Component {

  constructor() {
    super()

    this.state = {

      task: ''

    }

    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)

  }

  handleTaskChange(e) {
    this.setState({ task: e.target.value })
  }

  handleAddTask() {
    let newTask = {
      id: Date.now(),
      task: this.state.task,
      myCheck: '',
      status: 'new',
      divStyle: {
        textDecoration: 'none'
      }
    }
    this.props.onTaskAdd(newTask)
    this.setState({ task: '' })
  }




  render() {


    return (

      <div className="container">
        <div className="row">
          <div className="input-field col s10">
            <textarea onChange={this.handleTaskChange} id="textarea2" value={this.state.task} className="materialize-textarea"></textarea>
            <label htmlFor="textarea2">Textarea</label>
          </div>
          <div className="input-field col s2">
            <a onClick={this.handleAddTask} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>


    )



  }



}


ToDoEditor.propTypes = {};

ToDoEditor.defaultProps = {};

export default ToDoEditor;
