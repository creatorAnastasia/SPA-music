import styled, {keyframes} from "styled-components";

const blick = keyframes`
from {
  transform: translateX(-4em) skewX(-45deg);
};
to {
  transform: translateX(10em) skewX(-45deg);
}`;
const ButtonBlick = styled.button`
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

  export default ButtonBlick;