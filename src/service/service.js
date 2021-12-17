import api from './api'

export const getAllTestID = async() => {
    const response = await api.get('/getQuizData');
    return response.data.tests;
}

export const getTestData = async(index) => {
    const response = await api.get('/getQuizData');
    return response.data.tests[index];
}

export const getQuestionData = (t_Id,q_id) => {
    
}



