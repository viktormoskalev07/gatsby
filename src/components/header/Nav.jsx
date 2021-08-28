import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components'; 
const StyledNav = styled.nav` 
flex-grow: 1;
    ul{
        display: flex; 
        width: 100%;
        flex-direction: column;
        justify-content: center;
        margin:0 10px;
        padding:0;
        list-style-type: none;
       
        li{
            width: 100%;
            &:nth-child(2n){
                transform:${(nav)=>nav?"translateX(-110%)":""} ;  

            }
            margin-bottom: 20px;

        }
        a {  
            display:inline-block;
            width:100%;
            padding: 20px;
            background-color: var(--primary);
            border: solid 1px var(--primary2);
            &:visited{
                color:black;
            }
             &:hover{
                background-color: var(--primary2);
            border: solid 1px var(--primary);
            color:white;
            }
            
        }  
    } 
`

function Nav({nav}) {
    return(
        <>
       
       <StyledNav nav={nav}>
        <ul>
            <li>  <Link activeClassName="nav__active"  to='/'>Все варинты </Link>   </li>
            <li>  <Link activeClassName="nav__active"  to='/'>Все варинты </Link>   </li>
            <li>  <Link activeClassName="nav__active"  to='/'>Все варинты </Link>   </li>
            <li>  <Link activeClassName="nav__active"  to='/'>Все варинты </Link>   </li>
            <li>  <Link activeClassName="nav__active"  to='/'>Все варинты </Link>   </li> 
        </ul> 
      </StyledNav>

        </>
    )
}

export default Nav;