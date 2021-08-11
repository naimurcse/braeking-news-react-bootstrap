import React from 'react';
import {Card,Button} from 'react-bootstrap';

const News = (props) => {

    console.log(props);
    console.log(props.article);

    const{author,content,description,publishedAt,title,url,urlToImage} = props.article;

    return (
        <div>
            <Card>
                <Card.Header>Top News #</Card.Header>
                <img src={urlToImage}></img>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;