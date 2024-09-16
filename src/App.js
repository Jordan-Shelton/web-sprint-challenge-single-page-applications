import React, { useState, useEffect} from "react"
import { Route, Switch, Link} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import pizzaBuilder from './pizzaBuilder'
import choice from './Choice'
import styled from 'styled-components'
import restraunts from './Restraunts'

/* photos */
import pizza from './Assets/Pizza.jpg'
import texas from './Assets/tr.png'
import billysims from './Assets/bs.jpg'
import chilis from './Assets/c.jpg'
import freddys from './Assets/f.jpg'
import kfc from './Assets/kfc.png'
import tacomayo from './Assets/tm.jpg'

const allFood = [
{
  photo: `${billysims}`,
  name: 'Billy Sims',
  type: 'BBQ',
  time: '45min',
  price: '4.99'
},  
{
  photo: `${freddys}`,
  name: 'Freddys',
  type: 'Burgers',
  time: '32min',
  price: '2.99'
},
{
  photo: `${tacomayo}`,
  name: 'Taco Mayo',
  type: 'tex-mex',
  time: '20min',
  price: '2.99'
},
{
  photo: `${kfc}`,
  name: 'KFC',
  type: 'Chicken',
  time: '20min',
  price: '3.99'
},
{
  photo: `${chilis}`,
  name: 'Chilis',
  type: 'Variety',
  time: '45min',
  price: '5.99'
},
{
  photo: `${texas}`,
  name: 'Texas Roadhouse',
  type: 'Steakhouse',
  time: '90min',
  price: '6.99'
}  
]

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  peppers: false,
  onions: false,
  pinnapple: false,
  comments: ''
}

const initialFormErrors = {
  name: 'must enter name',
  size: 'must tell me hunger level'
}




const App = () => {

  //start
  const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(true)


const postPizza = pizza => {
  axios.post('https://reqres.in/api/pizza', pizza)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    setFormValues(initialFormValues)
}

const inputChange = (name, value) => {
  yup.reach(choice, name)
    .validate(value)
    .then(() => {setFormErrors({...formErrors, [name]: ''})})
    .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const pizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepperoni', 'olives', 'onions', 'peppers'].filter(topping => formValues[topping])
  }
  postPizza(pizza)
}
useEffect(() => {
  choice.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])
  //stop

  const [foods, setFoods] = useState(allFood)

  return (
    <styleBody>
      <h1>Harrah Eats</h1>
      <nav>
        <styleLink className = 'links'>
          <styleButton><Link to = '/Pizza'>Build </Link></styleButton>
          <styleButton><Link to = '/'>Home </Link></styleButton>
        </styleLink>
      </nav>
      <styleBanner src = {pizza}/>

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
    </styleBody>
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