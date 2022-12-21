import axios from 'axios';

export const METADATA = 'metadata';
export const RULES = 'rules'
export const EVALUATE = 'rules/eval'

export class CRUDService {

    static baseUrl = 'http://ec2-3-238-92-30.compute-1.amazonaws.com:8080/';


    static getExtraInfo(serviceRoute, itemId) {

        const url = this.baseUrl + serviceRoute + '/' + itemId

        return axios.get(
            url
        ).then(res => res.data);
    }

    static get(serviceRoute, item) {

        const url = this.baseUrl + serviceRoute + '/' + item;

        return axios.get(
            url
        ).then(res => res.data);
    }

    static post(newItem, serviceRoute) {


        const url = this.baseUrl + serviceRoute;


        return axios.post(url, newItem)
            .then(res => res.data)
            .catch(function(error) {
                if (error.response) {
                    // Request made and server responded
                    alert("ERROR " + error.response.data.code + "\n" + error.response.data.message);

                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

            });

    }

    static deleteRule(serviceRoute, itemId) {
        const url = this.baseUrl + serviceRoute + '/' + itemId
        return axios.delete(url).then(res => res.status);
    }

}