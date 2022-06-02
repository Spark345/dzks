import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://4d12-185-120-190-108.ngrok.io`,
    // headers: {
    //     'API-KEY': ''
    // }

})

export const AppealsAPI = {
    getAppeals(){
        return instance.get(`letters`)
            .then(response => response.data)
    },
    sendAppeals(lastName, name, computerName, message){
        return instance.post(`letters`, {lastName, name, computerName, message})
            .then(response => response.data)
    },
    updateStatus(id, status){
        return instance.put(`letters/id:${id}/status:${status}`)
            .then(response => response.data)
    }
}