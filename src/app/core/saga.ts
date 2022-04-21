import { all } from "redux-saga/effects";
import { starWarsSaga } from "../../features/StarWarsApp/saga";
export default function* rootSaga() {
  yield all([
    starWarsSaga(),
  ]);
}
