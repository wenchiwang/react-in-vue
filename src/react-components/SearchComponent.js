
/* eslint-disable */

import React from 'react'

class SearchComponent extends React.Component {
  render () {
    const { fruits, alertSelectedItem } = this.props;

    return (
        <ul>
          {fruits.map(fruit => <li onClick={alertSelectedItem} key={fruit}>{fruit}</li>)}
        </ul>
    );
  }
}

export default SearchComponent
