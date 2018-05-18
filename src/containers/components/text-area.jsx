import React from 'react'
import PropTypes from 'prop-types'

class TextArea extends React.Component {

  render() {
    return <div>
      {this.props.phrases.map((phrase, index) => {
        return <p key={index}>
          {phrase}
        </p>
      })}
    </div>
  }
}

TextArea.propTypes = {
  phrases: PropTypes.array.isRequired
}

export default TextArea