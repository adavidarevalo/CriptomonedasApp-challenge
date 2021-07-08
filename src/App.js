import React,{useState, useEffect} from "react"
import Form from "./components/Form"
import CardInfo from "./components/CardInfo"
import Header from "./components/Header.js"
import styled from "@emotion/styled"
const AppDiv = styled.div`
background: #1c2431;
min-height: 100vh;
`
const AppGridDiv = styled.div`
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-row: 1fr 1fr;
  @media (min-width: 800px){
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr;
  }
`
function App() {
  const [coin, addCoin] = useState({
    TypeOfCurrency: "",
    Cryptocurrency: ""
  })
  const [infoCripto, addInfo]=useState({})
  useEffect(() => {
    if(coin.TypeOfCurrency==="") return;
    const Api = async() =>{
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin.Cryptocurrency}&tsyms=${coin.TypeOfCurrency}`
      const result = await fetch(url)
      const answer = await result.json()
      addInfo(answer.DISPLAY[coin.Cryptocurrency][coin.TypeOfCurrency])
    }
    Api();
  }, [coin])
  return (
    <AppDiv>
      <Header/>
      <AppGridDiv>
        <video src="https://cdn.videvo.net/videvo_files/video/free/2018-04/small_watermarked/180405_FinancialCharts_14_preview.webm" autoplay="true" muted="true" loop="true" width="100%" height="100%" max-width="640" max-height="480"></video>
      <div>
      <Form addCoin={addCoin}/>
      <CardInfo infoCripto={infoCripto}/>
      </div>
      </AppGridDiv>
    </AppDiv>
  );
}

export default App;
