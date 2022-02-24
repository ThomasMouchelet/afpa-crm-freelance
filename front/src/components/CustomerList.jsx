import { useState, useEffect } from "react";
import CustomerDetails from "./CustomerDetails";
import { Link } from "react-router-dom"
import { findAll } from "../services/customer.service";

function CustomerList() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetAllCustomers()
    }, [])

    const fetAllCustomers = async () => {
        try {
            const data = await findAll()
            setCustomers(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Link to="/customers/create">
                <button>Add new cutomer</button>
            </Link>
            <ul>
                {customers.map(customer => <CustomerDetails key={customer.id} customer={customer} />)}
            </ul>
        </div>
    )
}

export default CustomerList;