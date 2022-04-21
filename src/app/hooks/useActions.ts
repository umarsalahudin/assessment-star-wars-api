import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import {  getStarWarsApi } from '../../features/StarWarsApp/actions'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ getStarWarsApi }, dispatch)
}

export default useActions