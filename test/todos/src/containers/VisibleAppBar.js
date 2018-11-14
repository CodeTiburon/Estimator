import { connect } from 'react-redux';
import { toggleDrawer } from '../includes/appActions';
import TodoAppBar from '../components/TodoAppBar';

const mapStateToProps = state => {
    return {
        open: state.app.drawer.open,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: () => {
            dispatch( toggleDrawer() );
        }
    }
}

const VisibleAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAppBar);

export default VisibleAppBar;
