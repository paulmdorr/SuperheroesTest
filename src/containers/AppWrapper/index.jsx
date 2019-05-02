import { connect } from 'react-redux'
import App from '../../components/App'
import { fetchSuperheroes } from '../../actions'

const mapStateToProps = state => {
  return {
    superheroes: state.superheroes,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSuperheroes: () => {
      dispatch(fetchSuperheroes())
    }
  }
}

const AppWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppWrapper
