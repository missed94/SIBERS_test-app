import axios from "axios";



   const baseURL = 'http://hr.sibers.com/Frontend-test.pdf'


export const contactsAPI = {
    getContacts() {
        return axios.get(baseURL)
            .then(response => {
                return response.data
            });
    }
}