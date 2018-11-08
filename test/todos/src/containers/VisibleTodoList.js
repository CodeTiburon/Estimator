import { connect } from 'react-redux';
import { todoFilter, toggleTodo } from '../includes/actions';
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

const mapStateToProps = state => {
    return {
        todos: getVisisbleTodos(state.todos, state.filter),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch( toggleTodo(id) );
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
