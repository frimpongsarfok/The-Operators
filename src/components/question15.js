import React from 'react'

import PropTypes from 'prop-types'

import './question15.css'

const Question15 = (props) => {
  return (
    <div className="question15-container">
      <span className="question15-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question15.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Question15.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question15
