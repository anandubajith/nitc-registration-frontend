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
        return axios
            .post(config.apiUrl + 'due', data, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }

}

export default new DueService();