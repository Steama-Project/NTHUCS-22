import {questionsTypes} from './question-types'

export const updateQuestion = (data) => ({
    type: questionsTypes.UPDATE_QUESTION,
    payload: data
})

export const toggleDisable = () => ({
    type: questionsTypes.TOGGLE_DISABLE,
})