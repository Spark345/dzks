import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://cf14-109-252-51-226.eu.ngrok.io`,
    // headers: {
    //     'API-KEY': ''
    // }

})

export const AppealsAPI = {
    getAppeals(){
        return instance.get(`letters`)
            .then(response => response.data)
    },
    getUserAppeals(userId){
        return instance.get(`users/id:${userId}/letters`)
            .then(response => response.data)
    },
    sendAppeals(userId, lastName, name, computerName, message, date, levelUrgency){
        return instance.post(`letters/user:${userId}`, {lastName, name, computerName, message, date, levelUrgency})
            .then(response => response.data)
    },
    updateStatus(id, status){
        return instance.put(`letters/id:${id}/status:${status}`)
            .then(response => response.data)
    }
}
export const AuthAPI = {
    getUserData(){
        return instance.get(`users`)
            .then(response => response.data)
    },
    login(login, password){
        return instance.post(`users/login`, {login, password} )
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`users/login`)
    },
    register(login, password){
        return instance.post(`users/registration`, {login, password})
    }

}