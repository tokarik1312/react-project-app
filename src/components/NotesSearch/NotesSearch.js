import React from 'react';
import PropTypes from 'prop-types';
import './NotesSearch.css';


class NotesSearch extends React.Component {

  constructor() {
    super()

    this.search = this.search.bind(this)

  }

  search(e) {
    let arr = this.props.notes
    let searchText = e.target.value
    this.props.onNotesSearch(searchText, arr)
  }


  render() {
    return (
      <div className="note-editor">
        <div className="row">
          <div className="input-field col s10">
            <textarea onChange={this.search} id="textarea3" className="materialize-textarea"></textarea>
            <label htmlFor="textarea3">Search</label>
          </div>
        </div>
      </div>
    )
  }
}

NotesSearch.propTypes = {};

NotesSearch.defaultProps = {};

export default NotesSearch;


