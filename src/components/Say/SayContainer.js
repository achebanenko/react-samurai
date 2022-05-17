import { connect } from 'react-redux'
import Say from './Say'
import { addPost } from '../../redux/actionCreators'

function mapDispatchToProps(dispatch) {
    return {
        addPost(payload) {
            return dispatch(addPost(payload))
        }
    }
}

const SayContainer = connect(undefined, mapDispatchToProps)(Say)

export default SayContainer