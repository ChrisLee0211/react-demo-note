import { fromJS } from 'immutable';
import * as constants from './constants';  

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage:1
});

export default (state = defaultState, actions) => {
    switch (actions.type){
        case constants.CHANGE_HOME_DATA:
           return state.merge({
                topicList:fromJS(actions.topicList),
                articleList:fromJS(actions.articleList),
                recommendList:fromJS(actions.recommendList)
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList':state.get('articleList').concat(actions.list),
                'articlePage':actions.nextPage
            })
    }
    return state
}