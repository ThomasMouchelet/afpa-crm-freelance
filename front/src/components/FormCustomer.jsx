import { useState } from "react"

function FormCustomer() {
    const [customer, setCustomer] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit event")
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