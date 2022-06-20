import React from 'react';
import PropTypes from 'prop-types';
import './NoteEditor.css';

class NoteEditor extends React.Component {

  constructor() {
    super()

    this.state = {
      title: '',
      text: '',
      color: 'white'
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)

  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }

  handleColorChange(e) {
    this.setState({ color: e.target.value })
  }

  handleAddNote() {
    let newNote = {
      id: Date.now(),
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    }

    this.props.onNoteAdd(newNote)
    this.setState({ title: '', text: '' })
  }







  render() {
    return (
      <div className="note-editor">
        <div className="row">
          <div className="input-field col s10">
            <textarea onChange={this.handleTitleChange} value={this.state.title} id="textarea1" className="materialize-textarea"></textarea>
            <label htmlFor="textarea1">Titlearea</label>
          </div>
          <div className="input-field col s10">
            <textarea onChange={this.handleTextChange} value={this.state.text} id="textarea2" className="materialize-textarea"></textarea>
            <label htmlFor="textarea2">Textarea</label>
          </div>
          <div>
            <input type="color" onChange={this.handleColorChange}></input>
          </div>
          <div className="input-field col s2">
            <a onClick={this.handleAddNote} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    )
  }
}



NoteEditor.propTypes = {};

NoteEditor.defaultProps = {};

export default NoteEditor;
