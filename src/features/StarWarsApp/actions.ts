import { createAction } from '@reduxjs/toolkit'
import { StarWarsApiPayload,SearchStarWarsPayload } from './type'

export const getStarWarsApi = createAction<StarWarsApiPayload>('getStarWarsApi')
export const searchStarWarsPayload = createAction<SearchStarWarsPayload>('searchStarWarsPayload')

export const clearStore = createAction('clearStore')