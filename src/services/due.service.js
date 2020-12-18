import axios from 'axios';

import config from '../config';

let token = '';
if ( localStorage.getItem('user')){
    token = JSON.parse(localStorage.getItem('user')).accessToken;
}
class DueService {
    getUserDue() {
        return axios
            .get(config.apiUrl + 'due', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }
  
}

export default new DueService();