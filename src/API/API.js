import axios from "axios";


export const contactsAPI = {
    getContacts() {
        return axios.get('http://demo.sibers.com/users')
            .then(response => {
                localStorage.setItem("contactsArray", JSON.stringify(response.data))
                return JSON.parse(localStorage.getItem("contactsArray"));
            });
    },
}