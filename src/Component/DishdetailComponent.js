import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  render() {
    const { dish } = this.props;

    if (dish == null) {
      return <div></div>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            {/* Render the comments */}
            <h4>Comments</h4>
            {dish.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{' '}
                  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;