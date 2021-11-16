import React, { useState } from 'react';
import Buttons from './components/common/Buttons';
import ButtonBlick from './components/common/ButtonBlick';
import styled from "styled-components";

const AppWrapper = styled.div`
display: flex;
justify-content: center;
position: absolute;
  top: 50%;
  left: 50%;
  //чтобы всегда был ровно посередине
 transform: translate(-50%, -50%);
`
const Container = styled.div`
	width: 300px;
	height: auto;
	padding: 20px 20px 10px;
	background: #caa2eb;
	background: linear-gradient(#d89dea, #e48bec);
	border-radius: 3px;
	box-shadow: 0px 4px #7d00e4, 0px 10px 15px rgba(0, 0, 0, 0.2);

`
const Result = styled.div`
display:flex;
justify-content: space-between ;
margin-bottom:1em;
`
const Number = styled.div`
height: 40px;
width: 70%;
float: right;
padding: 0 15px;
background: rgba(0, 0, 0, 0.2);
border-radius: 3px;
box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);
	
/* Typography */
font-size: 17px;
line-height: 40px;
color: white;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
text-align: right;
letter-spacing: 1px;
`


const ButtonClear = styled(ButtonBlick)`
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#aa0330+0,8f0222+34,6b0025+100 */
background: rgb(170,3,48); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(170,3,48,1) 0%, rgba(143,2,34,1) 34%, rgba(107,0,37,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(170,3,48,1) 0%,rgba(143,2,34,1) 34%,rgba(107,0,37,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(170,3,48,1) 0%,rgba(143,2,34,1) 34%,rgba(107,0,37,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aa0330', endColorstr='#6b0025',GradientType=0 ); /* IE6-9 */
`


 

function App({className}) {
  const [result, setResult] = useState('')
  const removeResult = () => setResult('')
  const countResult = () => {
    try {
      setResult(eval(result))
    } catch {
      setResult('NaN')
    }
  }
  const addSymbol = (sym) =>{
    setResult(result + sym)
  }
  return (
    <AppWrapper className={className}>
      <Container>
        <Result>
        <ButtonClear  onClick={() => removeResult()}>C</ButtonClear>
          <Number>{result}</Number>
          </Result>
          <Buttons addSymbol={addSymbol} countResult={countResult}/>
        </Container>
    </AppWrapper>
  );
}

export default App;
