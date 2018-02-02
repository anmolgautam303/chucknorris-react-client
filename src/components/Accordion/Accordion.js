import React, { Component } from 'react'
import Collapsible from 'react-collapsible'

import { connect } from 'react-redux'

class Accordion extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    console.log(this.props.categories)
    return (
      <div>
        { this.props.categories && this.props.categories.map((category) => 
        <Collapsible classParentString="App-Collapsible" trigger={category} onOpening={() => alert('opening that shit...')}>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        
        )}
        
     </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
};

export default connect(mapStateToProps)(Accordion)