import React, { useState, useEffect} from "react"
import { Route, Switch, Link} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import pizzaBuilder from './pizzaBuilder'
import choice from './Choice'

const restraunts = [
{
  photo: `${}`,
  name: 'Billy Sims',
  type: 'BBQ',
  time: '45min',
  price: '4.99'
},  
{
  photo: `${}`,
  name: 'Freddys',
  type: 'Burgers',
  time: '32min',
  price: '2.99'
},
{
  photo: `${}`,
  name: 'Taco Mayo',
  type: 'tex-mex',
  time: '20min',
  price: '2.99'
},
{
  photo: `${}`,
  name: 'KFC',
  type: 'Chicken',
  time: '20min',
  price: '3.99'
},
{
  photo: `${}`,
  name: 'Chilis',
  type: 'Variety',
  time: '45min',
  price: '5.99'
},
{
  photo: `${}`,
  name: 'Texas Roadhouse',
  type: 'Steakhouse',
  time: '90min',
  price: '6.99'
}  
]

const App = () => {
  return (
    <styleBody>
      <h1>Harrah Eats</h1>
      <nav>
        <styleButton><Link to = '/Pizza'>Build </Link></styleButton>
        <styleButton><Link to = '/'>Home </Link></styleButton>
      </nav>
    </styleBody>

    <Switch>
      <Route>
        <pizzaBuilder values = {formValues} change = {inputChange} submit = {formSubmit} errors = {formErrors} disabled = {disabled}/>
      </Route>
    </Switch>

    <styleFood>
      {
        foods.map((food, idx) => {
          return(
            <food key = {idx} photo = {food.photo} name = {food.name} price = {food.price} type = {food.type} time = {food.time}/>
          )
        })
      }
    </styleFood>

  )
}
export default App;


/* Styles */

const styleBody = styled.div`
display:flex;
justify-content:center;
text-align:center;
flex-direction:column
`
const styleImg = styled.img`
height:120px;
width:200px;
`
const styleFood = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
width:100%;
`