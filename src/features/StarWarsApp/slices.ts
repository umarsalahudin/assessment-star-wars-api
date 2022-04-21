import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit'

import { clearStore } from './actions'
import { StarWarsPeopleApi } from './type'

type Payload={
  count:number
  results:Array<StarWarsPeopleApi>
}

const getStarWarsPeople = createSlice({
  name: 'getStarWarsPeople',
  initialState:{} as Payload,
  reducers: {
    setStarWarsPeople: (state, { payload }: PayloadAction<any>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => {},
  },
})


const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => payload,
   
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
})


export const { setStarWarsPeople } = getStarWarsPeople.actions
export const {setIsLoading} = isLoading.actions
export default combineReducers({
  getStarWarsPeople:getStarWarsPeople.reducer,
  isLoading:isLoading.reducer
})