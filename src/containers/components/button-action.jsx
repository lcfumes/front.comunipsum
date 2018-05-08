import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'

class ButtonAction extends React.Component {

  constructor(props) {
    super(props);

    this.getIcon = this.getIcon.bind(this);
  }
  
  getIcon() {
    if (this.props.icon === 'plus') {
      return faPlus;
    }
    if (this.props.icon === 'minus') {
      return faMinus;
    }
  }

  render() {
    return <div className="actions">
      <button
        className="button"
        onClick={this.props.action}
      >
        <FontAwesomeIcon icon={this.getIcon()} />
      </button>
    </div>
  }
}

ButtonAction.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}

export default ButtonAction