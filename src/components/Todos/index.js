import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Actions
import { addTodo } from '../../actions/todos';

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/?_embed=todos`);
        const user = await res.json();
        
        for(const t of user.todos) {
            this.props.addTodo(t.title, t.description, t.completed);
        }
    }

    render() {
        const todos = this.props.todos.map(t => <li key={t.id}>{ t.title }</li>);

        return (
            <ul>
                { todos }
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    addTodo
};

// Restituisce una funzione utile a connettere le parti selezionate di stato (mapStateToProps)
// e le azioni (mapDispatchToProps) al componente che le viene passato
const connectStoreToComponent = connect(mapStateToProps, mapDispatchToProps);
// Ottengo il componente connesso allo store
const componentConnectedToRedux = connectStoreToComponent(Todos);
// Il componente connesso allo store dovrà accedere alle funzionalità del Router
export default withRouter(componentConnectedToRedux);

// connect(mapStateToProps, mapDispatchToProps)(Todos)