import { connect } from 'react-redux';
import { setVisibility } from '../includes/actions';
import FiltersBar from '../components/FiltersBar';

const mapStateToProps = state => {
    return {
        value: state.filter,
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
