import React from 'react'
import styled from 'styled-components'

export default function restraunts(props){
    const {photo, name, price, type, time} = props
    return(
        <styleDiv>
            <styleData>
                <styleImg src = {photo}/>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{type}</p>
                <p>{time} eta</p>
            </styleData>
        </styleDiv>
    )
}

const styleImg = styled.img`
width: 200px;
hight: 120px;
`
const styleDiv = styled.div`
display:flex;
justify-content:center;
`
const styleData = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
`