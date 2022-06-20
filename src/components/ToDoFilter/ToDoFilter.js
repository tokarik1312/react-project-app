import React from 'react';
import PropTypes from 'prop-types';
import './ToDoFilter.css';



class ToDoFilter extends React.Component {
  constructor() {
    super()

    this.handleNew = this.handleNew.bind(this)
    this.handleFinished = this.handleFinished.bind(this)
    this.handleAll = this.handleAll.bind(this)

  }


  handleNew() {
    
    this.props.onTasksNew()
  }

  handleFinished() {
   
    this.props.onTasksFinished()
  }

  handleAll() {
    this.props.onTasksAll()
  }


  render() {
    return (
      <div className="container">
        <h5>Filters</h5>
        <form action="#">
          <p>
            <label>
              <input onChange={this.handleAll} className="with-gap" name="group1" type="radio" />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input onChange={this.handleFinished} className="with-gap" name="group1" type="radio" />
              <span>Finished</span>
            </label>
          </p>
          <p>
            <label>
              <input onChange={this.handleNew} className="with-gap" name="group1" type="radio" />
              <span>New</span>
            </label>
          </p>
        </form>
      </div>
    )
  }


}

ToDoFilter.propTypes = {};

ToDoFilter.defaultProps = {};

export default ToDoFilter;
