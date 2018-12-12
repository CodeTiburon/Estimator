import { connect } from 'react-redux';
import PostAppBar from '../components/PostAppBar';

import {
    setDomainChange,
    setDomainChangeCancel,
    switchSource,
 } from '../includes/postsActions';

const mapStateToProps = state => {
    return {
        source: state.posts.source,
        state: state.posts.state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDomainChange: () => {
            dispatch( setDomainChange() );
        },
        onDomainChangeCancel: () => {
            dispatch( setDomainChangeCancel() );
        },
        onDoDomainChange: (value) => {
            dispatch( switchSource(value) );
        },
    }
}

const VisiblePostBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostAppBar);

export default VisiblePostBar;
