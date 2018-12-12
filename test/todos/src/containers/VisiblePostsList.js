import { connect } from 'react-redux';
import PostsList from '../components/PostsList';

const mapStateToProps = state => {
    return {
        info: state.posts.info,
        state: state.posts.state,
    }
}

const VisiblePostsList = connect(
    mapStateToProps,
)(PostsList);

export default VisiblePostsList;
