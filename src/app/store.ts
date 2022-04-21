import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import rootReducer from "../features/StarWarsApp/slices"
import saga from 'redux-saga'

import rootSaga from './core/saga';

const sagaMiddleware = saga()

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>

export default store;

