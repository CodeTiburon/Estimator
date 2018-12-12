import { connect } from 'react-redux';
import DomainInfo from '../components/DomainInfo';

const mapStateToProps = state => {
    return {
        info: state.posts.info,
        state: state.posts.state,
    }
}

const VisibleDomainInfo = connect(
    mapStateToProps,
)(DomainInfo);

export default VisibleDomainInfo;
