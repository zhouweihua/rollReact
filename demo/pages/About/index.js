import './about.less'

import React from 'react'

export default class About extends React.Component {
  render() {
    console.log('About')
    return (
      <div>
        <p className="testAbout">{'About'}</p>
      </div>
    )
  }
}
