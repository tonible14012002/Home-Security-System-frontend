import axios from "axios";

const getOrdinaryUsers = (q={}) => {
    var params = new URLSearchParams()
    
    for (let key in q) {
        if (Array.isArray(q[key])){
            q[key].forEach(value => params.append(key, value))
        }
        else {
            params.append(key, q[key])
        }
    }
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/accounts/ordinary/',
        params: params
    })
    .then(resp => resp.data)
}

const deleteOrdinaryUser = (id) =>  {
    return axios({
        method: 'delete',
        url:  `http://127.0.0.1:8000/accounts/ordinary/${id}/`,
   })
    .then(resp => resp.data)
}

const updateOrdinaryUser = (id, data = {}) => {
    let formData = new FormData()
    for (let key in data) {
        formData.append(key, data[key])
    }
    
    return axios({
        method: 'put',
        url:  `http://127.0.0.1:8000/accounts/ordinary/${id}/`,
        data: FormData,
    })
}


const acceptOrdinaryUser = (id) => {
    return axios({
        method: 'post',
        url: `http://127.0.0.1:8000/accounts/ordinary/${id}/accept/`
    })
    .then(resp => resp.data)
}


const getAdminUsers = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve([

            ])
        }, 1000);

    })
}

const updateUser = (userID) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve({
                "id": 4,
                "username": "lisa",
                "first_name": "Lisa",
                "last_name": "Bui",
                "email": "asdasd@gmail.com",
                "phone": "0933802218",
                "address": "Ta quang buu",
                "birth": "2022-10-31"
            })    
        }, 1000);
    })
}

export { getOrdinaryUsers, getAdminUsers, updateUser, deleteOrdinaryUser, updateOrdinaryUser, acceptOrdinaryUser }