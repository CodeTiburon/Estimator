import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../includes/actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={ e => {
                    e.preventDefault();

                    const value = input.value.trim();

                    if ( !value.length ) return;

                    dispatch( addTodo(value) );

                    input.value = '';
                }}
            >

                <input
                    ref={node => {
                        input = node
                    }}
                />

                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
