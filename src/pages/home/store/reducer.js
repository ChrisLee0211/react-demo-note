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
    ],
    articleList:[
        {
            id:1,
            title:'教育部：2018年这15个专业就业率最低！看起来都是好专业……',
            desc: '新晚报 1月15日 很多高考学子们在高考路上拼尽全力过后，就到了一个重视程度丝毫不比高考轻的另外一程，那就是高考志愿的填报。 很多的高中学校也会...',
            imgUrl:'//upload-images.jianshu.io/upload_images/12527628-a5816132e3a26e25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'教育部：2018年这15个专业就业率最低！看起来都是好专业……',
            desc: '新晚报 1月15日 很多高考学子们在高考路上拼尽全力过后，就到了一个重视程度丝毫不比高考轻的另外一程，那就是高考志愿的填报。 很多的高中学校也会...',
            imgUrl:'//upload-images.jianshu.io/upload_images/12527628-a5816132e3a26e25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'教育部：2018年这15个专业就业率最低！看起来都是好专业……',
            desc: '新晚报 1月15日 很多高考学子们在高考路上拼尽全力过后，就到了一个重视程度丝毫不比高考轻的另外一程，那就是高考志愿的填报。 很多的高中学校也会...',
            imgUrl:'//upload-images.jianshu.io/upload_images/12527628-a5816132e3a26e25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:4,
            title:'教育部：2018年这15个专业就业率最低！看起来都是好专业……',
            desc: '新晚报 1月15日 很多高考学子们在高考路上拼尽全力过后，就到了一个重视程度丝毫不比高考轻的另外一程，那就是高考志愿的填报。 很多的高中学校也会...',
            imgUrl:'//upload-images.jianshu.io/upload_images/12527628-a5816132e3a26e25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
]
});

export default (state = defaultState,actions) =>{
    
    return state
}