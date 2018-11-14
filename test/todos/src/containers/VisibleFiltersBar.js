import { connect } from 'react-redux';
import { setVisibility, todoFilter } from '../includes/appActions';
import FiltersBar from '../components/FiltersBar';

const mapStateToProps = (state, ownProps) => {
    let filter;

    switch ( ownProps.filter ) {
        case 'pending':
            filter = todoFilter.UNCOMPLETED;
            break;
        case 'completed':
            filter = todoFilter.COMPLETED;
            break;
        default:
            filter = todoFilter.ALL;
    }

    return {
        value: filter,
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
