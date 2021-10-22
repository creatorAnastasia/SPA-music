
import styled, {keyframes} from "styled-components";


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


const blick = keyframes`
from {
  transform: translateX(-4em) skewX(-45deg);
};
to {
  transform: translateX(10em) skewX(-45deg);
}`;
const ButtonS = styled.button`
  position: relative;
  display: inline-block;
  text-decoration: none;
background: rgb(203,96,179); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(203,96,179,1) 0%, rgba(63,149,255,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(203,96,179,1) 0%,rgba(63,149,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(203,96,179,1) 0%,rgba(63,149,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#3f95ff',GradientType=0 ); /* IE6-9 */
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
//чтобы ничего не выходило за пределы блока/
 overflow: hidden; 
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    //ширина блика
    width: 2em;
    height: 100%;
    background-color: rgba(255,255,255, 0.6);
    transform: translateX(6em) skewX(-45deg);
  }
  &:hover {
    cursor:pointer;
    &:before {
      animation: ${blick} 0.5s  ;
     }
  }
` 



const Grid = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
`;

function App({className}) {
  return (
    <AppWrapper className={className}>
      <Container>
        <Result>
        <ButtonS onClick={() => console.log("C")}>C</ButtonS>
          <Number>0</Number>
          </Result>
          <Grid>
        <ButtonS onClick={() => console.log("7")}>7</ButtonS>
        <ButtonS onClick={() => console.log("8")}>8</ButtonS>
        <ButtonS onClick={() => console.log("9")}>9</ButtonS>
        <ButtonS onClick={() => console.log("+")}>+</ButtonS>
        <ButtonS onClick={() => console.log("4")}>4</ButtonS>
        <ButtonS onClick={() => console.log("5")}>5</ButtonS>
        <ButtonS onClick={() => console.log("6")}>6</ButtonS>
        <ButtonS onClick={() => console.log("-")}>-</ButtonS>
        <ButtonS onClick={() => console.log("1")}>1</ButtonS>
        <ButtonS onClick={() => console.log("2")}>2</ButtonS>
        <ButtonS onClick={() => console.log("3")}>3</ButtonS>
        <ButtonS onClick={() => console.log("÷")}>÷</ButtonS>
        <ButtonS onClick={() => console.log("0")}>0</ButtonS>
        <ButtonS onClick={() => console.log(".")}>.</ButtonS>
        <ButtonS onClick={() => console.log("=")}>=</ButtonS>
        <ButtonS onClick={() => console.log("x")}>x</ButtonS>
          </Grid>
        </Container>
    </AppWrapper>
  );
}

export default App;
