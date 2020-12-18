import axios from 'axios';

import config from '../config';


let token = JSON.parse(localStorage.getItem('user')).accessToken;

class ApplicationService {
    getApplication() {
        return axios
            .get(config.apiUrl + 'application', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }
  
}

export default new ApplicationService();