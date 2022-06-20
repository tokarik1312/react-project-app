import React from 'react';
import PropTypes from 'prop-types';
import './TodoPage.css';
import ToDoApp from '../../components/ToDoApp/ToDoApp';

const TodoPage = () => (
  <div className="TodoPage">
    <h1 className="notes-header">What to do?</h1>
    <ToDoApp />
  </div>
);

TodoPage.propTypes = {};

TodoPage.defaultProps = {};

export default TodoPage;
