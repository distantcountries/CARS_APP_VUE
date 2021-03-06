//zadatak 8
import axios from 'axios'

export default class RegisterService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/';
    }

    register(newUser) {
        return axios.post('register', newUser)
            .catch(() => {
                alert('Invalid Registration');
            })
    }
}

export const registerService = new RegisterService();