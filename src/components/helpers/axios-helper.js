import axios from 'axios'

export const AxiosHelper = {
    initializeAxios: function() {
        axios.defaults.baseURL = 'https://ingamaps-api.herokuapp.com';
        axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('user')).token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    },
    updateToken: function(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
}