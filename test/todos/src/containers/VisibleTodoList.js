import { connect } from 'react-redux';
import { toggleTodo, openDialog, removeTodo } from '../includes/actions';
import { todoFilter } from '../includes/appActions';
import TodoList from '../components/TodoList';

const getVisisbleTodos = (todos, filter) => {
    switch (filter) {
        case todoFilter.COMPLETED:
            return Object.assign({}, todos, {
                items: todos.items.filter( item => item.completed )
            });

        case todoFilter.UNCOMPLETED:
            return Object.assign({}, todos, {
                items: todos.items.filter( item => !item.completed )
            });

        default:
            return todos;
    }
}

const mapStateToProps = (state, ownProps) => {
    let filter;

    switch ( ownProps.filter ) {
        case 'pending':
            filter = todoFilter.UNCOMPLETED;
            break;
        case 'completed':
            filter = todoFilter.COMPLETED;
            break;
        default:
            filter = todoFilter.ALL;
    }

    return {
        todos: getVisisbleTodos(state.todos, filter),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch( toggleTodo(id) );
        },
        onAddClick: () => {
            dispatch( openDialog(-1) );
        },
        onEditClick: id => {
            dispatch( openDialog(id) );
        },
        onDeleteClick: id => {
            dispatch( removeTodo(id) );
        },
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
