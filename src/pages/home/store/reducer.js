import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id:1,
            title:'社会热点',
            imgUrl:'//upload-images.jianshu.io/upload_images/12713337-da89f65aec445915.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/'
        },
        {
            id:1,
            title:'手绘',
            imgUrl:'//upload-images.jianshu.io/upload_images/12713337-da89f65aec445915.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/'
        }
    ]
});

export default (state = defaultState,actions) =>{
    
    return state
}