function CustomerDetails(props) {
    return (
        <li>
            <strong>CompanyNmae : </strong> {props.customer.companyName}
            <strong>Email : </strong> {props.customer.email}
        </li>
    )
}

export default CustomerDetails;