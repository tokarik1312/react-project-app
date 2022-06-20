import React from 'react';
import PropTypes from 'prop-types';
import './NotesGrid.css';
import Note from '../Note/Note'
import Masonry from 'masonry-layout'

class NotesGrid extends React.Component {


  componentDidMount() {
    this.msnry = new Masonry( '.notes-grid', {
      // options
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10
    });
  }

  componentDidUpdate() {
      this.msnry.reloadItems()
      this.msnry.layout()
  }





  render() {
    return (
      <div className="notes-grid row">
        {
          this.props.notes.filter((item) => {
            return item.title.includes(this.props.conditionNotes)
          }).map(note => {
            return <Note
             key={note.id}
             id={note.id}
             title={note.title}
             text={note.text}
             color={note.color}
             onNoteDelete={this.props.onNoteDelete}
             />
          })
        }
      </div>
    )
  }
}


NotesGrid.propTypes = {};

NotesGrid.defaultProps = {};

export default NotesGrid;
