import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import choice from './Choice'

const pizzaBuilder = (props) => {
    const {values, submit, change, errors, disabled} = props
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return(
        <div className = 'choiceDiv'>
            <h1>Make it your way!</h1>
            <form onSubmit = {onSubmit}>
                <div className = 'errors'>

                </div>
                <label>
                    <h2>Your name</h2>
                    <p>{errors.name}</p>
                    <input name = 'name' type = 'text' value = {values.name} onChange = {onChange}/>
                </label>
                <label>
                    <h3>How hungry are you?</h3>
                    <p>{errors.size}</p>
                    <select onChange = {onChange} value = {values.size} name = 'size'>
                        <option value = ''>--Select Size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                    <option value = 'large'>Large</option>                        
                    </select>
                </label>
                <label>
                    <h3>Choose your toppings</h3>
                    <label>
                        Pepperoni
                        <input type = 'checkbox' name = 'pepperoni' onChange = {onChange}/>
                    </label>

                    <label>
                        Mushrooms
                        <input type = 'checkbox' name = 'mushrooms' onChange = {onChange}/>
                    </label>

                    <label>
                        Onions
                        <input type = 'checkbox' name = 'Onions' onChange = {onChange}/>
                    </label>

                    <label>
                        Peppers
                        <input type = 'checkbox' name = 'peppers' onChange = {onChange}/>
                    </label>

                    <label>
                        Pinnapple
                        <input type = 'checkbox' name = 'pinnapple' onChange = {onChange}/>
                    </label>
                </label>
                <label>
                    <h3>Comments</h3>
                    <h4></h4>
                    <input style = {{width:'90%'}} name = 'comments' type = 'text' onChange = {onChange} value = {values.comments}/>
                </label>
                <button id = 'submit' disabled = {disabled}>Checkout</button>
            </form>
        </div>
    )
}

export default pizzaBuilder