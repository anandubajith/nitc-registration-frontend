import axios from 'axios';
import config from '../config';

class DueService {
    getDues(token) {
        return axios
            .get(config.apiUrl + 'due', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }

    uploadDue(token, data) {
        console.log('todo', data, token);
    }
  
}

export default new DueService();