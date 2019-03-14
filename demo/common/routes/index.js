import { Router, Route, Switch, Redirect } from 'react-router'
import React from 'react'
import PropTypes from 'prop-types'
import lazyloader from '../lazy-loader'


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
          <Route exact path={`/${prefix}`} component={lazyloader(() => import('../../pages/Home'))} />
          <Route render={({ location, history: { action } }) =>
            <div className={this.getClassNames(action)}>
              <Switch>
                <Route exact path={`/${prefix}/about`} component={lazyloader(() => import('../../pages/About'))}/>
                <Route exact path={`/${prefix}/topics`} component={lazyloader(() => import('../../pages/Topics'))}/>
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
