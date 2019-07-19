import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api/' //zadatak 2
    }

    getAll() {
        return axios.get('cars')
    }

    add(newCar) { //zadatak 3
        delete newCar.id;
        return axios.post('cars', newCar)

    }

    edit(newCar) {
        return axios.put('cars/' + id, newCar)
    }

    get(index) {
        return axios.get('cars/' + index)
    }

    delete(id) {
        return axios.delete('cars/' + id)
    }
}

export const carsService = new CarsService()