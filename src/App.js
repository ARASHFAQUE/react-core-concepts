import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  const nayoks = ['Razzak', 'Jafor', 'Salman', 'Shuvo', 'Sakib']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere Elements', price: '$249.99'}
  ]

  // const nayokNames = nayok.map(element => element)
  // console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {/* <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li> */}
        {
          products.map( product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map( pd =>  <Product product={pd}></Product>)
      }
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
      <Person name="Lionel Messi" title="Greatest Of All Time"></Person>
      <Person name="Shakib Al Hasan" title="Best Of All Time"></Person>
      <Person name="Virat Kohli" title="Best Batsman"></Person>
      <Person name="Ben Stokes" title="Good Player"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [ users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then( res => res.json())
    .then( data => setUsers(data));
  }, [])


  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {/* {
          console.log(users)
        } */}
        {
          users.map( user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const buttonStyle = {
    marginLeft: '10px'
  }
  const [ count, setCount ] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  // {
  //   const newCount = count + 1;
  //   setCount(count + 1);
  // };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={buttonStyle} onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    color: 'black',
    backgroundColor: 'white',
    height: '300px',
    width: '250px',
    float: 'left',
    margin: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  return (
  <div style={{border:'2px solid red', margin:'10px', padding:'5px 15px', width:"550px"}}>
    <h1>Name: {props.name}</h1>
    <h3>{props.title}</h3>
  </div>
  )
}


export default App;
