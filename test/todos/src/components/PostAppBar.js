import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';

import { postsState } from '../includes/postsActions';

const styles = theme => ({
    input: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    button: {
        margin: theme.spacing.unit,
    },
    hidden: {
        display: 'none',
    },
});

let PostAppBar = (props) => {
    let input;

    const { classes, source, state, onDomainChange, onDomainChangeCancel, onDoDomainChange } = props;

    return (
        <AppBar
            position="static"
            color="default"
        >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Domain name:
                </Typography>

                <div className={classes.input}>
                    <TextField
                        id="input-domain"
                        defaultValue={source}
                        onChange={onDomainChange()}
                        inputRef={ node => { input = node } }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {(postsState.SUCCESS === state) && <LinkIcon />}
                                    {(postsState.SUCCESS !== state) && <LinkOffIcon />}
                                </InputAdornment>
                            ),
                        }}
                     />
                </div>

                <Button
                    color="primary"
                    variant="contained"
                    onClick={ () => {
                        console.log(input.value);
                        // onDoDomainChange( input.value.trim() )
                    }}
                    className={classNames(classes.button, {
                        [classes.hidden]: postsState.SUCCESS === state,
                    })}
                >
                    Load
                </Button>

                <Button
                    color="default"
                    variant="contained"
                    onClick={onDomainChangeCancel()}
                    className={classNames(classes.button, {
                        [classes.hidden]: postsState.SUCCESS === state,
                    })}
                >
                    Cancel
                </Button>
            </Toolbar>
        </AppBar>
    );
}

PostAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
  onDomainChange: PropTypes.func.isRequired,
  onDomainChangeCancel: PropTypes.func.isRequired,
  onDoDomainChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(PostAppBar);
