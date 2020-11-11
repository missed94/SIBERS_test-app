import axios from "axios";



export const contactsAPI = {
    getContacts() {
        return axios.get('http://demo.sibers.com/users')
            .then(response => {
                return response.data
            });
    }
}