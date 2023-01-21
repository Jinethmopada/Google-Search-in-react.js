import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionUpdate: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  newSuggestion = suggestion => {
    this.setState({suggestionUpdate: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const {suggestionUpdate} = this.state
    const searchSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            className="google-img"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                className="search-icon-img"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="input-value"
                placeholder="Search Google"
                onChange={this.onChangeInput}
                value={suggestionUpdate}
              />
            </div>
            <ul className="list-container">
              {searchSuggestionList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  googleSuggestion={eachSuggestion}
                  newSuggestion={this.newSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
