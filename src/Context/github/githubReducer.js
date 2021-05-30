import { GET_SEARCH, GET_REPOS, SET_LOADING, SET_IS_SEARCH, SET_ERROR, SET_LOADED_PAGE } from '../types';

const handlers = {
    [GET_SEARCH]: (state, { payload }) => ({...state, user: payload, isLoaded: false, isSearch: true, error: false }),
    [GET_REPOS]: (state, { payload }) => ({...state, repos: payload, isLoaded: false, isLoadedPage: false }),
    [SET_LOADING]: state => ({...state, isLoaded: true }),
    [SET_IS_SEARCH]: state => ({...state, isSearch: true }),
    [SET_ERROR]: state => ({...state, error: true }),
    [SET_LOADED_PAGE]: state => ({...state, isLoadedPage: true })
}


export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}