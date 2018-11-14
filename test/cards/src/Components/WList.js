import React from 'react';
import { CardColumns } from 'reactstrap';
import WSingleCard from './WSingleCard.js';
import WPaginate from './WPaginate.js';

import { httpGet } from './../includes/utils.js';

class WList extends React.Component {
    constructor(props) {
        super(props);

        let page = parseInt(props.match.params.page);

        if ( isNaN(page) || page < 1 ) {
            page = 1;
        }

        this.state = {
            // site: 'staging.codetiburon.com',
            site: 'ct2018.wp',
            posts: [],
            pageCount: 0,
            page: page,
            params: {
                'per_page': 3,
                '_embed': 1,
            }
        };

        this.onLoad = this.onLoad.bind(this);
    }

    onLoad(response) {
        this.setState({
            posts: response.data,
            pageCount: response.headers['x-wp-totalpages'],
        });
    }

    fetchData() {
        this.setState({
            posts: [],
            pageCount: 0,
        });

        const params = this.state.params;

        params['page']  = this.state.page;

        const url   = '//' + this.state.site + '/wp-json/wp/v2/posts';

        httpGet(url, this.onLoad, params );
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if ( !this.state.posts.length ) return null;

        let cards = [];

        for (let post of this.state.posts) {
            cards.push(<WSingleCard
                key={post.id}
                value={post}
            />)
        }

        return (
            <div>
                <WPaginate key="top"
                    pageCount={this.state.pageCount}
                    page={this.state.page}
                />

                <CardColumns>{cards}</CardColumns>

                <WPaginate key="bottom"
                    pageCount={this.state.pageCount}
                    page={this.state.page}
                    onNavigate={this.onNavigate}
                />
            </div>
        );
    }
}

export default WList;
