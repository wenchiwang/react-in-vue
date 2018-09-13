
/* eslint-disable */

import React from 'react'

class SearchComponent extends React.Component {
  render () {
    return (
        <ul>
          {this.props.fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
        </ul>
    );
  }
}

export default SearchComponent
