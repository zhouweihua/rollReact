import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
  testAction,
} from './store'

@connect(
  state => ({
    ...state.homeData
  }),
  dispatch => ({
    action: bindActionCreators({
      testAction,
  }, dispatch) })
)
export default class Home extends React.Component {
  handleChangeTest = () => {
    console.log('handleChangeTest')
    this.props.action.testAction('zhouweihue')
  }
  render() {
    const { test } = this.props
    console.log('home', test)
    return (
      <div>
        <p style={{ fontSize: '30px' }}>{test}</p>
        <div onClick={this.handleChangeTest}>点击</div>
      </div>
    )
  }
}
