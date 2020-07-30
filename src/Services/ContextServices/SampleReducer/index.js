import { nameReducer } from './nameReducer.js';
import { couterReducer } from './couterReducer.js'

export const combinedReducer = {
    name: nameReducer,
    count: couterReducer
}