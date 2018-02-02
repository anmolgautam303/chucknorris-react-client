import { connect } from 'react-redux'
import { fetchCategories } from '../helpers/request'
import Accordion from '../components/Accordion/Accordion'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories(ownProps.url))
    }
  }
}

const AccordionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion)

export default AccordionContainer