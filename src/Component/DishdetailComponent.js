import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  // Render dish details
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  // Render comments
  if (!comments || comments.length === 0) {
    return <div>No comments available</div>;
  }

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <p>
        -- {comment.author},{' '}
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        }).format(new Date(Date.parse(comment.date)))}
      </p>
    </li>
  ));

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentItems}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  const { dish } = props;

  if (!dish) {
    return <div>No dish selected</div>;
  }

  const dishItem = <RenderDish dish={dish} />;
  const commentSection = <RenderComments comments={dish.comments} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">{dishItem}</div>
        <div className="col-12 col-md-5 m-1">{commentSection}</div>
      </div>
    </div>
  );
};

export default DishDetail;