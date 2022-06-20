import React from 'react';
import PropTypes from 'prop-types';
import './NotesPage.css';
import NotesApp from '../../components/NotesApp/NotesApp';

const NotesPage = () => (
  <div className="notes-page">
    <h1 className="notes-header">Notes</h1>
    <NotesApp />
  </div>
);

NotesPage.propTypes = {};

NotesPage.defaultProps = {};

export default NotesPage;
