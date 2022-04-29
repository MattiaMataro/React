import React from 'react';

// Components
import UsersListRow from '../UsersListRow';

// Models
import { objToUser } from '../../models/User';

// Contexts
import UserContext from '../../contexts/UserContext';

export default class UsersList extends React.Component {
    static contextType = UserContext;
    
    constructor() {
        super();

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(
            res => res.json()
        ).then(
            users => this.setState({
                users: users.map(user => objToUser(user))
            })
        );

        console.log(this.context);
        this.context.login();
        console.log(this.context);
        this.context.user.name = 'Paolino Paperino';
        console.log(this.context);
    }

    onDelete = user => {
        const users = [...this.state.users];
        users.splice( this.state.users.indexOf(user), 1 );

        this.setState({
            users
        });
    }

    render() {
        const items = this.state.users.map(user => <UsersListRow key={user.id} onDelete={this.onDelete} user={user} />);

        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { items }
                </tbody>
            </table>
        );
    }
}
