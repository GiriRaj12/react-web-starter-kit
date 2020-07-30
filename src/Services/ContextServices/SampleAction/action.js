import { ADD_NAME } from '../SotreConstants.js';


export const name = (name) => {
    return {
        type: ADD_NAME,
        payload: name
    }
}

export const count = (action) => {
    return {
        type: action
    }
}