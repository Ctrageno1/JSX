/* eslint-disable eqeqeq */
import "./App.css";
import React from "react";
//import MyCompany from "./Components/MyCompany";
//import MyComponent from "./Components/Helloclass";
//import HelloAsClass from "./Components/Helloclass";





function App() {

		


	var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];
  

  
    const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
    const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
    const allAreTeenagers = people.every(person => person.age >= 10 && person.age <= 20);
    const anyIsTeenager = people.some(person => person.age >= 10 && person.age <= 20);
  
    return (
      <div>
        <p>First Teenager: {JSON.stringify(firstTeenager)}</p>
        <p>All Teenagers: {JSON.stringify(allTeenagers)}</p>
        <p>All Are Teenagers: {allAreTeenagers.toString()}</p>
        <p>Any Is Teenager: {anyIsTeenager.toString()}</p>
      </div>
    );
	/*var array = [1, 2, 3, 4];

	var sum = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	return <p>sum:{JSON.stringify(sum)}</p>;*/
  //return(
  //  <div>
   //   <Menu/>
  //  </div>
 // )

  }
export default App;
