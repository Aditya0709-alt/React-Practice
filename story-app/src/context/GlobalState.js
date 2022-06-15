import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    story: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    function createStory(story){
        dispatch({
            type: 'CREATE_STORY',
            payload: story
        })
    }

    function deleteStory(id) {
        dispatch({
            type: 'DELETE_STORY',
            payload: id
        });
    };
 

    function editStory(story){
        dispatch({
            type: 'EDIT_STORY',
            payload: story
        })
    }

    return (<GlobalContext.Provider value={{
        story: state.story,
        createStory,
        editStory,
        deleteStory
    }}>
        {children}
    </GlobalContext.Provider>);
}