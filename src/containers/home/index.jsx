import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ButtonAction from '../components/button-action';
import TextArea from '../components/text-area';

import logo from '../../assets/images/comunipsum_v1.png'
import '../../assets/home.css'

import {
  increment,
  decrement,
  toggleRand
} from '../../modules/phrases'

class Home extends React.Component {
  render() {
    return <div className="container">
      <h1>
        <img src={logo} width="280px" alt="Comunipsum"/>
      </h1>

      <p className="counter">Count: {this.props.total}</p>

      <div className="buttonsArea">
        <ButtonAction action={this.props.increment} icon="plus" />
        <ButtonAction action={this.props.decrement} icon="minus" />
      </div>

      <div className="phrases">
        <TextArea phrases={this.props.phrases} />
      </div>
    </div>
  }
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
