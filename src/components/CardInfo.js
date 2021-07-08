import React from "react"
import styled from "@emotion/styled"
const CardInfoDiv = styled.div`
background: rgba(255, 255, 255, .9);
width: 90%;
max-width:500px;
border-radius: 5px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 0 auto;
margin-block:25px;
p{
  margin:0px;
  font-size: 1rem;
  margin-bottom: 10px;
  span{
    font-weight: 500;
    display: block;
    text-align: center;
  }
}
`

const CardInfo = ({infoCripto}) =>{
  if(Object.keys(infoCripto).length===0) return null; 
  console.log(infoCripto)
  return(
    <CardInfoDiv>
      <p>The price is: <span>{infoCripto.PRICE}</span></p>
      <p>The highest price of the day is: <span>{infoCripto.HIGHDAY}</span></p>
      <p>The lowest price of the day is: <span>{infoCripto.LOWDAY}</span></p>
      <p>Variation of the last 24 hours: <span>{infoCripto.CHANGEPCT24HOUR}</span></p>
      <p>Last update: <span>{infoCripto.LASTUPDATE}</span></p>
    </CardInfoDiv>
  )
}
export default CardInfo;