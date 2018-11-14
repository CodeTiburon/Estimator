import { connect } from 'react-redux';
import { setVisibility } from '../includes/appActions';
import FiltersBar from '../components/FiltersBar';

const mapStateToProps = (state) => {
    return {
        value: state.app.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTabChange: (value) => {
            dispatch( setVisibility(value) );
        }
    }
}

const VisibleFiltersBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersBar);

export default VisibleFiltersBar;
