import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://397d-109-252-187-7.ngrok.io`,
    // headers: {
    //     'API-KEY': ''
    // }

})

export const AppealsAPI = {
    getAppeals(){
        return instance.get(`letters`)
            .then(response => response.data)
    },
    sendAppeals(){
        return instance.post()
    },
    updateStatus(id, status){
        return instance.put(`letters/id:${id}/status:${status}`)
            .then(response => response.data)
    }
}