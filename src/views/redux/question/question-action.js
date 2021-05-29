import {questionsTypes} from './question-types'

const updateQuestion = (data) => ({
    type: questionsTypes.UPDATE_QUESTION,
    payload: data
})

export default updateQuestion;