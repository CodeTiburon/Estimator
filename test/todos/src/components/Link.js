import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </Button>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Link;
