import axios from "axios"
import { RESSOURCE_CUSTOMER } from "./config"

const findAll = () => {
    return axios.get(RESSOURCE_CUSTOMER)
        .then(res => res.data["hydra:member"])
}

const create = (customer) => {
    return axios.post(RESSOURCE_CUSTOMER, customer)
        .then(res => res.data["hydra:member"])
}

export {
    findAll,
    create
}