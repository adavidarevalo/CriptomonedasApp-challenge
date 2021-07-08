import React, {useEffect, useState} from "react"
import useCurrency from "../hooks/useCurrency";
import useCriptomoneda from "../hooks/useCriptomoneda"
import styled from "@emotion/styled"
const FormDiv = styled.div`
display: flex;
justify-content:center;
align-items: center;
form{
  margin-top: 50px;
  background: rgba(255, 255, 255, .9);
  width: 90%;
  max-width:500px;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    text-transform: uppercase;
    text-align: center;
  }
  button{
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    background: #95a8de;
    border-radius: 5px;
    cursor:pointer;
    &:active,
    &:hover{
      background: #647094;
      box-shadow: 1px 3px 20px 5px rgb(0 0 0 / 20%);
    }
  }
}
`
const FormP = styled.p`
color:red;
`
const Form = ({addCoin}) =>{
  const [dataApi, addData] = useState([])
  const [error, addError] = useState(false)
  //Api
  useEffect(() => {
    const Api = async() =>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const result = await fetch (url)
      const data = await result.json()
      addData(data.Data)
    }
    Api();
  }, [])

  const Currency = [
    {code: "USD", name: "Dolar"},
    {code: "MXN", name: "Peso Mexicano"},
    {code: "EUR", name: "Euro"},
    {code: "GBP", name: "Libra Esterlina"},
  ]

  const [currency, addCurrency, Select] = useCurrency("Select your Currency", "", Currency);
  const [stateCripto, addStateCripto, SelectCriptomoneda] = useCriptomoneda("Select your Criptomoneda", dataApi)
  //button
  const getInformation = e =>{
    if(currency === "" || stateCripto === ""){
      addError(true)
      return;
    }
    addError(false)
    addCoin({
    TypeOfCurrency: currency,
    Cryptocurrency: stateCripto 
    })
  }

  return(
    <FormDiv>
    <form>
      <h2>quote cryptocurrency</h2>
      <Select/>
      <SelectCriptomoneda />
      <button
      type="button"
      onClick={getInformation}
      >Get Information</button>
      {error? <FormP>Fill in all the data.</FormP>: null}
    </form>
    </FormDiv>
  )
}
export default Form;