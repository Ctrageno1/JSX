import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../Shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      dishContent: null, // Variable to hold the content from the external URL
    };
  }

  componentDidMount() {
    // Fetch the content from the external URL
    fetch('http://dish.id')
      .then((response) => response.text())
      .then((data) => {
        this.setState({ dishContent: data });
      })
      .catch((error) => {
        console.log('Error fetching dish content:', error);
      });
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const { dishes, selectedDish, dishContent } = this.state;

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />

        <div>
          <Header />
          <Menu dishes={dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
          <Footer />
        </div>

        {dishContent && (
          <div>
            <h3>External URL Content:</h3>
            <p>{dishContent}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Main;