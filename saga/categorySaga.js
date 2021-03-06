import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../redux/categoryReducer';
// get list account in Account + Admin PAGE
function* fetchCategory() {
    try {
        // const payload = yield call(Api, '/game', 'get')
        console.log('fetch category saga');
        yield put({ type: constants.FETCH_CATEGORY_SUCCESS, payload: '1' })
    } catch (err) {
        console.log(err)
    }
}

// create account then render new list
// function* fetchCreateGameSaga({ payload }) {
//     try {
//         yield call(Api, '/game/create', 'post', JSON.stringify(payload));
//         yield fetchGameSaga();
//         yield call(Success, { message: "Cập nhật Game thành công !" })
//     } catch (err) {
//         console.log(err)
//     }
// }

// // delete account then render new list
// function* fetchDeleteGameSaga({ payload }) {
//     try {
//         yield call(Api, '/game/delete', 'delete', JSON.stringify({ id: payload }));
//         yield fetchGameSaga();
//         yield call(Success, { message: "Xóa Game thành công !" })
//     } catch (err) {
//         console.log(err)
//     }
// }


export default function* categorySaga() {
    yield takeLatest(constants.FETCH_CATEGORY, fetchCategory);
}