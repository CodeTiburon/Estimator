import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { closeDialog, addTodo, editTodo } from '../includes/actions';

let TodoDialog = ({fullScreen, id, text, dispatch}) => {
    let input;

    const title = text.length ? 'Edit item' : 'Add new item';
    const open = null !== id;

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
        >

            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="todo"
                    label="Item description"
                    type="text"
                    fullWidth
                    defaultValue={text}
                    inputRef={
                        node => { input = node }
                    }
                />
            </DialogContent>

            <DialogActions>
                <Button
                    color="primary"
                    onClick={ () => {
                        const value = input.value.trim();

                        if ( !value.length ) return;

                        if ( -1 === id ) {
                            dispatch( addTodo(value) );
                        } else {
                            dispatch( editTodo(id, value) );
                        }

                        input.value = '';

                        dispatch( closeDialog() );
                    }}
                >
                    Save
                </Button>

                <Button
                    color="primary"
                    onClick={ () => dispatch( closeDialog() )}
                >
                    Cancel
                </Button>
            </DialogActions>

        </Dialog>
    );
}

TodoDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    id: PropTypes.number,
    text: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = function(state) {
    let text = '';

    if ( null !== state.todos.editId ) {
        for (const item of state.todos.items) {
            if ( state.todos.editId === item.id ) {
                text = item.text;
                break;
            }
        }
    }

    return {
        id: state.todos.editId,
        text: text,
    }
}

TodoDialog = connect(mapStateToProps)(TodoDialog);

export default withMobileDialog()(TodoDialog);
