import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { postsState } from '../includes/postsActions';

const styles = theme => ({
});

const DomainInfo = (props) => {
    const { classes, state, info } = props;

    return (
        <ExpansionPanel disabled={postsState.SUCCESS !== state} defaultExpanded={postsState.SUCCESS === state}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>General Info</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
                <Typography>{info.description}</Typography>
                <Typography>{info.name}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

DomainInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  state: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DomainInfo);
