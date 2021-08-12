import React from 'react';
import styled, { css } from 'styled-components';
const open = css`
 width: 100%;
`;
const close = css`
position:absolute;
left: 10px;
right: 10px;
 
&:nth-child(1){
  transform:rotate(45deg);
}
&:nth-child(3){
  transform:rotate(-45deg);
}
&:nth-child(2){
  transform:rotate(235deg);
  opacity:0;
}
`;
const StBurger=styled.button`
background-color: transparent;

position: relative;
padding:10px;
width: 50px;
display: flex;
height: 50px;
flex-direction: column;
justify-content: space-around;
border: none;

span{
    
    ${({nav})=>( nav? open:close)}
    background-color: black;
    height: 3px;
 transition:0.4s;
}
`
const Burger = ({nav}) => {
 

const navToggle = ()=>{
  if(nav[0]){
      nav[1](false);
  }else {nav[1](true)}
}

    return (
        <StBurger nav={nav[0]} onClick={navToggle}>
            <span></span>
            <span></span>
            <span></span>
        </StBurger>
    );
}

export default Burger;
