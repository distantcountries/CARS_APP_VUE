//zadatak 5
import axios from 'axios'

export default class AuthService {

    constructor() {
        this.setAxiosDefaultAuthorizationHeader() //ovo dodajemo da bi se pri svakom loginu setovao token, kada se izlogujemo trebalo bi da nema greske
    }

    login(email, password) {
        return axios.post('http://localhost:8000/api/login', { //ruta iz api.php laravela koja vodi do login controllera
            email,
            password
        }).then(data => {
            window.localStorage.setItem('loginToken', data.data.token)
            this.setAxiosDefaultAuthorizationHeader()
        })
    }

    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = window.localStorage.getItem('loginToken')
        axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
    }

    logout() {
        window.localStorage.removeItem('loginToken')
        delete axios.defaults.headers.common['Authorization']
        console.log('logout')
    }

    isAuthenticated() {
        return !!window.localStorage.getItem('loginToken')
    }

}

export const authService = new AuthService()