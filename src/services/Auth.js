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
        }).then(({ data }) => {
            window.localStorage.setItem('loginToken', data.token) //{ data } stoji u liniji gore da ne bismo pisali data.data.token
            window.localStorage.setItem('user', JSON.stringify(data.user)) //dodato
            this.setAxiosDefaultAuthorizationHeader()
            return data.user;
        })
    }

    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = window.localStorage.getItem('loginToken')
        axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
    }

    logout() {
        window.localStorage.removeItem('loginToken')
        window.localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        console.log('logout')
    }

    isAuthenticated() {
        return !!window.localStorage.getItem('loginToken')
    }

    // register(name, email, password) {
    //     this.user = {};
    //     this.user.name = name;
    //     this.user.email = email;
    //     this.user.password = password;
    //     return axios.post('http://localhost:8000/api/register', this.user)
    //       .catch($e => {
    //         alert($e)
    //       })
    // }

}

export const authService = new AuthService()