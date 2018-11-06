import React from 'react';
import { Card, CardTitle, CardSubtitle,  CardBody, CardFooter, CardText, CardImg } from 'reactstrap';
import { decodeHTML } from './../includes/utils';

function WSingleCard(props) {
    const post = props.value;
    const title = decodeHTML(post.title.rendered);
    const excerpt = decodeHTML(post.excerpt.rendered);

    const postDate = new Date( post.date );

    let imgSrc = '';
    let imgAlt = '';

    try {
        imgSrc = post._embedded['wp:featuredmedia'][0].source_url;
        imgAlt = post._embedded['wp:featuredmedia'][0].alt_text;
    } catch (error) {
        imgSrc = '';
        imgAlt = '';
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{postDate.toLocaleDateString('fr-FR')}</CardSubtitle>
            </CardBody>

            <CardImg
                width="100%"
                src={imgSrc}
                alt={imgAlt}
            />

            <CardBody>
                <CardText>{excerpt}</CardText>
                <a href={post.link} target="_blank" rel="noopener noreferrer">Continue reading...</a>
            </CardBody>

            <CardFooter><a href={'/post/' + post.slug}>More...</a></CardFooter>
        </Card>
    );
}

export default WSingleCard;
