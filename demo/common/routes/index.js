import { Router, Route, Switch, Redirect } from 'react-router'
import React from 'react'
import PropTypes from 'prop-types'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Topics from '../../pages/Topics'

export default class RouterCmp extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    
    console.log(location)
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/topics" component={Topics}/>
          <Route exact path="/" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
