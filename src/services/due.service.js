import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

let token = JSON.parse(localStorage.getItem('user')).access_token;

class DueService {
    getUserDue() {
        return axios
            .get(API_URL + 'due', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                console.log(response)
                return response.data;
            });
    }
  
}

export default new DueService();