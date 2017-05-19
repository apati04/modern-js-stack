// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.main.get('message'),
})

export default connect(mapStateToProps)(Message)
