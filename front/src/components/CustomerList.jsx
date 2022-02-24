import { useState, useEffect } from "react";
import CustomerDetails from "./CustomerDetails";
import { Link } from "react-router-dom"

function CustomerList() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data["hydra:member"]))
    }, [])

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