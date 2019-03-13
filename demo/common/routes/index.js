import { Router, Route, Switch, Redirect } from 'react-router'
import React from 'react'
import PropTypes from 'prop-types'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Topics from '../../pages/Topics'


const prefix = process.env.prefix

export default class RouterCmp extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    
    console.log(location)
    return (
      <Router history={history}>
        <div>
          <Route exact path={`/${prefix}`} component={Home} />
          <Route render={({ location, history: { action } }) =>
            <div className={this.getClassNames(action)}>
              <Switch>
                <Route exact path={`/${prefix}/about`} component={About}/>
                <Route exact path={`/${prefix}/topics`} component={Topics}/>
              </Switch>
            </div>
          } />
        </div>
      </Router>
    )
  }
  getClassNames (action) {
    console.log(action)
    return ''
  }
}
