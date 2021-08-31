import React, {useState} from "react"
import styled from "@emotion/styled"

const UseCurrencyDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-block:25px;
width: 80%;
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

const useCurrency = (label, firstState, options) =>{
  const [state, addState] = useState(firstState)
  console.log("state", state)
  const Select = () =>(
    <UseCurrencyDiv>
      <label >{label}</label>
      <select
      onChange={e=> addState(e.target.value)}
      value={state}
      >
        <option value="">--Select--</option>
        {options.map(option => (
          <option key={option.code} value={option.code}>{option.name}</option>
        ))}
      </select>
    </UseCurrencyDiv>
  )
  return [state, addState, Select]
}
export default useCurrency