import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit'

import { clearStore } from './actions'
import { StarWarsPeopleApi } from './type'



const getStarWarsPeople = createSlice({
  name: 'getStarWarsPeople',
  initialState: [] as Array<StarWarsPeopleApi>,
  reducers: {
    setStarWarsPeople: (state, { payload }: PayloadAction<Array<StarWarsPeopleApi>>) => payload,
    
  },
  extraReducers: {
    [clearStore.type]: () => [],
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