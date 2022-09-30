import { useSelector } from 'react-redux'
import { selectAllFlights } from './flightSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(selectAllFlights)

    const renderedFlights = users.map(flight => (
        <li key={flight.id}>
            <Link to={`/flight/${flight.id}`}>{flight.to}</Link>
        </li>
    ))

    return (
        <section>
            <h2>Flights</h2>

            <ul>{renderedFlights}</ul>
        </section>
    )
}

export default UsersList