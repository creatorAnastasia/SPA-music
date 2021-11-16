import ButtonBlick from './ButtonBlick';
import styled from "styled-components";
import React, { useState }  from 'react';

const GridButton = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
`;
const ButtonCount = styled(ButtonBlick)`
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
background: -moz-linear-gradient(top,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
`



const Buttons = ({ countResult, addSymbol }) => {
 

  return (
    <GridButton>
      <ButtonBlick onClick={() => addSymbol("7")}>7</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("8")}>8</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("9")}>9</ButtonBlick>
      <ButtonCount onClick={() => addSymbol("+")}>+</ButtonCount>
      <ButtonBlick onClick={() => addSymbol("4")}>4</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("5")}>5</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("6")}>6</ButtonBlick>
      <ButtonCount onClick={() => addSymbol("-")}>-</ButtonCount>
      <ButtonBlick onClick={() => addSymbol("1")}>1</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("2")}>2</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol("3")}>3</ButtonBlick>
      <ButtonCount onClick={() => addSymbol("/")}>/</ButtonCount>
      <ButtonBlick onClick={() => addSymbol("0")}>0</ButtonBlick>
      <ButtonBlick onClick={() => addSymbol(".")}>.</ButtonBlick>
      <ButtonCount onClick={countResult}>=</ButtonCount>
      <ButtonCount onClick={() => addSymbol("*")}>*</ButtonCount>
    </GridButton>
  )
}

export default Buttons;