import React from 'react';
import PropTypes from 'prop-types';
import './ToDoGrid.css';
import ToDo from '../ToDo/ToDo'

class ToDoGrid extends React.Component {
  render() {
    return (
      <div>     
        {this.props.tasks.filter(el => el.status != this.props.condition).map(el => {
          return <ToDo
            key={el.id}
            id={el.id}
            task={el.task}
            divStyle={el.divStyle}
            myCheck={el.myCheck}
            onTaskDelete={this.props.onTaskDelete}
            onTaskCheck={this.props.onTaskCheck}
            onTasksNew={this.props.handleNewTasks}
          />
        })}
      </div>
    )
  }
}

ToDoGrid.propTypes = {};

ToDoGrid.defaultProps = {};

export default ToDoGrid;
