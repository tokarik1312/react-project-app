import React from 'react';
import PropTypes from 'prop-types';
import './NotesApp.css';
import NoteEditor from '../NoteEditor/NoteEditor';
import NotesGrid from '../NotesGrid/NotesGrid';
import NotesSearch from '../NotesSearch/NotesSearch'

// let data = [
//   {
//     id: 1,
//     title: 'note1',
//     text: 'Lorem ipsum dolor sit amet, consectetur adip',
//     color: '#FFD700'
//   },
//   {
//     id: 2,
//     title: 'note2',
//     text: 'Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect',
//     color: 'yellow'
//   },
//   {
//     id: 3,
//     title: 'note3',
//     text: 'Lorem ipsum dollit, sed do eiusmont ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     color: 'orange'
//   },
//   {
//     id: 4,
//     title: 'note4',
//     text: 'Lorem ipsum dolor sitetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non panim id est laborum.',
//     color: 'violet'
//   },
//   {
//     id: 5,
//     title: 'note5',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pronim id est laborum.',
//     color: 'gray'
//   },
//   {
//     id: 6,
//     title: 'note6',
//     text: 'Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect',
//     color: 'cyan'
//   },
//   {
//     id: 7,
//     title: 'note7',
//     text: 'Lorem ipsudolor sit amet, consect',
//     color: '#90ee90'
//   },
//   {
//     id: 8,
//     title: 'note8',
//     text: 'Lorem ipsum dolot, senna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     color: 'violet'
//   },
// ]



class NotesApp extends React.Component {

  constructor() {
    super()

    this.state = { 
      notes: [],
      conditionNotes: ''
    }

    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleDeleteNode = this.handleDeleteNode.bind(this)
    this.handleSearchNote = this.handleSearchNote.bind(this)
  }


  componentDidMount() {
    // get 
    let localNotes = JSON.parse(localStorage.getItem('notes'))
    if(localNotes)
      this.setState({notes: localNotes})
  }

  componentDidUpdate() {
    // set
    let notesStr = JSON.stringify(this.state.notes)
    localStorage.setItem('notes', notesStr)
  }


  handleAddNote(newNote) {
    // add newNote to data
    let notesCopy = this.state.notes.slice()
    notesCopy.unshift(newNote)
    this.setState({
      notes: notesCopy
    })
  }


  handleDeleteNode(id) {
    let newArray = this.state.notes.filter(note => note.id != id)
    this.setState({notes: newArray})
  }

  
  handleSearchNote(searchText) {
    this.setState({
      conditionNotes: searchText
    })
  }


  render() {
    return (
      <div className="notes-app container">
        <NoteEditor onNoteAdd={this.handleAddNote} />
        <NotesSearch onNotesSearch={this.handleSearchNote} notes={this.state.notes} />
        <NotesGrid onNoteDelete={this.handleDeleteNode} notes={this.state.notes} conditionNotes={this.state.conditionNotes}/>
      </div>
    )
  }
}




NotesApp.propTypes = {};

NotesApp.defaultProps = {};

export default NotesApp;
