import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'

import '../../assets/home.css'

import {
  increment,
  decrement,
  toggleRand
} from '../../modules/phrases'

const Home = props => {
  return <div className="container">
    <h1>Home</h1>
    <p>Count: {props.total}</p>

    <div className="buttonsArea">
      <div className="actions">      
        <button
          className="button"
          onClick={props.increment}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="actions">
        <button
          className="button"
          onClick={props.decrement}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>

    <div>
      <ul>
        {props.phrases.map((phrase) => {
          return <li>
            {phrase}
          </li>
        })}
      </ul>
    </div>

  </div>
}

const mapStateToProps = state => ({
  total: state.phrases.total,
  rand: state.phrases.rand,
  phrases: state.phrases.phrases
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement,
  toggleRand
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)