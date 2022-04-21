
import  { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import {getUtil} from "../../services/axiosClient"
import * as actions from './actions'
import * as slicesActions from './slices'
import { StarWarsPeopleApi } from './type'
import { API } from '../../utils/constant';


function* getStarWarsApi(action: ReturnType<typeof actions.getStarWarsApi>) {
  yield put(slicesActions.setIsLoading(true))

  try {
    const {data} : AxiosResponse<Array<StarWarsPeopleApi>>= yield getUtil(
      `${API.People}`
    )
    console.log(data,'data====> hhehrhehr');
    const {results}:any = data || []
    yield put(slicesActions.setStarWarsPeople(results))
  } catch (err) {
    console.error(err)
  }

  yield put(slicesActions.setIsLoading(false))
}

export function* starWarsSaga() {
  yield takeLatest(actions.getStarWarsApi.type, getStarWarsApi)
}