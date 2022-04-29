import React from 'react';
import { Link } from 'react-router-dom';

class UsersListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const to = `/users/${this.props.user.id}/todos`;

        return (
            <tr>
                <td>{ this.props.user.id }</td>
                <td>{ this.props.user.email }</td>
                <td>{ this.props.user.name }</td>
                <td>
                    <Link to={to}>Todos</Link>
                    <button onClick={() => this.props.onDelete(this.props.user)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default UsersListRow;