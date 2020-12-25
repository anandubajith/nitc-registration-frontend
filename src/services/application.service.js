import axios from 'axios';
import config from '../config';

class ApplicationService {
    getApplication(token) {
        return axios
            .get(config.apiUrl + 'application', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                console.log(response.data)
                return response.data;
            });
    }

    updateApplication(token, application) {
        return axios
            .put(config.apiUrl + 'application', { ...application }, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }

    listApplications(token) {
        return axios
            .get(config.apiUrl + 'application/list', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    }

    verifyApplication(token, applicationId, remark) {
        return axios
            .put(config.apiUrl + 'application/status', { remark }, { params: { id: applicationId }, headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                return response.data;
            });
    }

}

export default new ApplicationService();