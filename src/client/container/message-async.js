// @flow

import { connect } from 'react-redux'

import MessageAsync from '../component/message'

const mapStateToProps = state => ({
  message: state.main.get('messageAsync'),
})

export default connect(mapStateToProps)(MessageAsync)
