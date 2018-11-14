import { connect } from 'react-redux';
import { hoverDrawer, leaveDrawer } from '../includes/appActions';
import TodoDrawer from '../components/TodoDrawer';

const mapStateToProps = state => {
    return {
        open: state.app.drawer.open,
        hover: state.app.drawer.hover,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHoverDrawer: () => {
            dispatch( hoverDrawer() );
        },
        onLeaveDrawer: () => {
            dispatch( leaveDrawer() );
        }
    }
}

const VisibleDrawer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDrawer);

export default VisibleDrawer;
