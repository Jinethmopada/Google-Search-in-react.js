import './index.css'

const SuggestionItem = props => {
  const {googleSuggestion, newSuggestion} = props
  const {suggestion} = googleSuggestion

  const onClickArrow = () => {
    newSuggestion(suggestion)
  }

  return (
    <li className="sugg-container">
      <p className="sugg-names">{suggestion}</p>
      <img
        className="arrow"
        alt="arrow"
        onClick={onClickArrow}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
