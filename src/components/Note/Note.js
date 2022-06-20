import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

class Note extends React.Component {
  render() {
    const { text, color, title, id } = this.props

    return (
      <div className="note card" style={{backgroundColor: color}}>
        <div className="delete-btn-container">
          <span onClick={() => {this.props.onNoteDelete(id)}} className="delete-note">X</span>
        </div>
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        <p>{text}</p>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
    )
  }
}



Note.propTypes = {};

Note.defaultProps = {};

export default Note;
