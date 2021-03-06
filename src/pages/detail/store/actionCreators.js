import axios from 'axios'
import { type } from 'os';
import { constants } from '.';

const changeDetail = (title,content) =>({
    type:constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then(res=>{
            const result = res.data.data;
            console.log(result)
            dispatch(changeDetail(result.title,result.content))
        }).catch(()=>{
            console.log('wrong')
        })
    }
}