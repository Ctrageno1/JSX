import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    return (
      <Card onClick={() => this.onDishSelect(dish)}>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    const { dishes } = this.props;
    const menu = dishes.map((dish) => (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        {this.renderDish(dish)}
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;