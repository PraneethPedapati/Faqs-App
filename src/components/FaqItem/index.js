import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {faqsItem} = this.props
    const {questionText, answerText} = faqsItem
    const {isActive} = this.state

    const plusButton = () => (
      <button
        type="button"
        className="toggle-button"
        onClick={this.onToggleButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          alt="plus"
        />
      </button>
    )

    const minusButton = () => (
      <button
        type="button"
        className="toggle-button"
        onClick={this.onToggleButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          alt="minus"
        />
      </button>
    )

    const showAnswer = () => (
      <div>
        <hr />
        <p className="faq-answer">{answerText}</p>
      </div>
    )

    return (
      <li className="faq-item-container">
        <div className="faq-question-container">
          <h1 className="faq-question">{questionText}</h1>
          {isActive ? minusButton() : plusButton()}
        </div>
        <div>{isActive && showAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
