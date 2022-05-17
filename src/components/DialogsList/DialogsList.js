import { NavLink } from "react-router-dom"

function ListItem({ id, name }) {
    return (
        <li>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </li>
    )
}

export default function DialogsList() {
    const data = [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' },
    ]

    return (
        <ul>
            {data.map(item =>
                <ListItem key={item.id} id={item.id} name={item.name} />
            )}
        </ul>
    )
}