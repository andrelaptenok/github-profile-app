import React, { useReducer } from 'react';
import { GithubContext } from '../github/githubContext';
import { githubReducer } from '../github/githubReducer';
import {
    GET_SEARCH,
    GET_REPOS,
    SET_LOADING,
    SET_IS_SEARCH,
    SET_ERROR,
    SET_LOADED_PAGE,
} from '../types';
import * as axios from 'axios';

export const GithubState = ({ children }) => {
    let initialState = {
        user: [],
        repos: [],
        isLoaded: false,
        isSearch: false,
        error: false,
        isLoadedPage: false,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const getSearch = async(value) => {
        await axios
            .get(`https://api.github.com/users/${value}`)
            .then((response) => {
                dispatch({
                    type: GET_SEARCH,
                    payload: response.data,
                });
                setLoading();
                setSearch();
                getRepos(value);
            })
            .catch((err) => {
                setError();
                console.log(`Error: ${err}`)
            });
    };

    const getRepos = async(value, pageNumber = 1) => {
        await axios
            .get(`https://api.github.com/users/${value}/repos?per_page=4&page=${pageNumber}`)
            .then((response) => {
                dispatch({
                    type: GET_REPOS,
                    payload: response.data,
                });
            })
            .catch((err) => {
                setError();
                console.log(`Error: ${err}`)
            });
    };

    const getPageRepos = (pageNumber) => {
        setLoadedPage();
        getRepos(user.login, pageNumber);
    };

    const { user, repos, isLoaded, isSearch, error, isLoadedPage } = state;
    const setLoading = () => dispatch({ type: SET_LOADING });
    const setSearch = () => dispatch({ type: SET_IS_SEARCH });
    const setError = () => dispatch({ type: SET_ERROR });
    const setLoadedPage = () => dispatch({ type: SET_LOADED_PAGE });
    return ( <
        GithubContext.Provider value = {
            {
                getSearch,
                user,
                getRepos,
                repos,
                setLoading,
                isLoaded,
                setSearch,
                isSearch,
                error,
                setLoadedPage,
                isLoadedPage,
                getPageRepos,
            }
        } > { ' ' } { children } { ' ' } <
        /GithubContext.Provider>
    );
};