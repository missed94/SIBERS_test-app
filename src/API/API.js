import axios from "axios";


export const contactsAPI = {
    getContacts() {
        return axios.get('http://demo.sibers.com/users')
            .then(response => {
                if (localStorage.getItem("contacts") === null) {
                    let contacts = response.data
                    localStorage.setItem("contacts", JSON.stringify(contacts))
                    //return JSON.parse(localStorage.getItem("contacts"));
                }
                return JSON.parse(localStorage.getItem("contacts"));

            });
    },
}