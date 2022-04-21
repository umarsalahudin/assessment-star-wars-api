import { createAction } from '@reduxjs/toolkit'
import { Page } from './type'

export const getStarWarsApi = createAction<Page>('getStarWarsApi')

export const clearStore = createAction('clearStore')