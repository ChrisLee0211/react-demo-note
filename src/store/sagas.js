import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';
const getData = () =>{
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                let data = ['hello','lee','chris'];
                resolve(data)
            },1000)
        })
    }


function* getInitList(){
    const res = yield getData();
    const action = initListAction(res);
    yield put(action);
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;