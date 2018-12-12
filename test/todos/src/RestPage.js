import React from 'react';

import VisiblePostBar from './containers/VisiblePostBar';
import VisibleDomainInfo from './containers/VisibleDomainInfo';
import VisiblePostsList from './containers/VisiblePostsList';

const RestPage = () => {
    return (
        <div>
            <VisiblePostBar />

            <VisibleDomainInfo />

            {/* <VisiblePostsList /> */}
        </div>
    );
}

export default RestPage;
