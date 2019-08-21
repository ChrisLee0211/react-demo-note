import axios from 'axios'
import { type } from 'os';
import { constants } from '.';

const changeDetail = (title,content) =>({
    type:constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(res=>{
            const result = res.data.data;
            dispatch(changeDetail(result.title,result.content))
        })
    }
}