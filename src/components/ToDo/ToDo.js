import React from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';


class ToDo extends React.Component {

  constructor() {
    super()


    this.myDelete = this.myDelete.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  myDelete() {
    this.props.onTaskDelete(this.props.id)
  }

  isChecked(e) {
  
    let newStyle = e.target.checked
    let myTask = this.props.task
    let myId = this.props.id
    this.props.onTaskCheck(newStyle, myTask, myId)

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="todo-box">
            <div>
              <form className='action="#"'>
                <p>
                  <label>
                    <input onChange={this.isChecked} type="checkbox" checked={this.props.myCheck} className="filled-in" />
                    <span></span>
                  </label>
                </p>
              </form>
            </div>
            <div style={this.props.divStyle} className="text">{this.props.task}</div>
            <div><i onClick={this.myDelete} className="small material-icons">delete_forever</i></div>
          </div>
        </div>
      </div>
    )
  }


}


ToDo.propTypes = {};

ToDo.defaultProps = {};

export default ToDo;
