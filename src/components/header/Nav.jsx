import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import './nav.css';
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
        }
        a {
            
            &:visited{
                color:black;
            }
             &:hover{
                color: var(--primary2);
            }
        }  
    } 
`

function Nav({nav}) {
    return(
        <>
       
       <StyledNav>
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