import axios from 'axios'


export default {

    getAllClients() {
        return axios.get('/api/clients').then(response => {
            return response.data
        })
    },

    getClient(id) {
        return axios.get('/api/clients/' + id).then(response => {
            return response.data
        })
    },

    addClient(client) {
        return axios.post('/api/clients', client).then(response => {
            return response.data 
        })
    },

    updateClient(client) {
        return axios.patch('/api/clients/' + client.id , client).then(response => {
            return response.data
        })
    },

    deleteClient(id) {
        return axios.delete('/api/clients/' + id).then(response => {
            return response.data 
        })
    }
}