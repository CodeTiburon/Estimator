import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spacer: {
        ...theme.mixins.toolbar,
    },
});

const TopSpacer = (props) => {
    return (
        <div className={props.classes.spacer}></div>
    );
};

export default withStyles(styles, { withTheme: true })(TopSpacer);
