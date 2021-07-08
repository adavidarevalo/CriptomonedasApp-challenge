import React, { useState} from "react"
import styled from "@emotion/styled"
const UseCriptomonedaDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-block:25px;
label{
    margin-bottom: 15px;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 500;
}
select{
  border: none;
  width: 80%;
  max-width: 800px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &active,
  &:hover{
    background: #dcdbdb;
  }
}
`

const useCriptomoneda = (label, options) =>{
  const [stateCripto, addStateCripto] = useState()
  const SelectCriptomoneda = () =>(
    <UseCriptomonedaDiv>
      <label>{label}</label>
      <select
      value={stateCripto}
      onChange={e=>addStateCripto(e.target.value)}
      >
        <option value="">--Select--</option>
        {options.map(option=>(
          <option value={option.CoinInfo.Internal} key={option.CoinInfo.id}>{option.CoinInfo.FullName}</option>
        ))}
      </select>
    </UseCriptomonedaDiv>
  )
  return[stateCripto, addStateCripto, SelectCriptomoneda]
}

export default useCriptomoneda;