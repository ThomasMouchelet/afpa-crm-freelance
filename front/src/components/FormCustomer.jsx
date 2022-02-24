import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { create } from "../services/customer.service";

function FormCustomer() {
    const [customer, setCustomer] = useState({})
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await create(customer)
            await navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget

        setCustomer({
            ...customer,
            [name]: value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" onChange={handleChange} name="email" />
            <input type="text" placeholder="Company name" onChange={handleChange} name="companyName" />
            <input type="submit" value="Ajouter" />
        </form>
    )
}

export default FormCustomer;