import {Link} from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from './logo.svg';
const activeNav = {
borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
}
const StHeader = styled.header `
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
border:solid red 1px;
padding:10px;
a{
margin-right: 20px;
padding: 5px; 
}
`

const StyledNav = styled.nav`
flex-grow: 1;
    ul{
        display: flex; 
        justify-content: center;
        margin:0 10px;
        padding:0;
        list-style-type: none;
    }
  

`
const StLogo = styled.div `
width: 40px;
`
const StContact = styled.div `
display: flex;
align-items: center;
flex-shrink: 0;
a , a:visited{
color:black;
margin-right: 20px;
}
`
const Header = () => {
 const [navToggle, setnavToggle] = useState(false)
return (
<StHeader>
    <StLogo>
        <Link to='index'>
        <img src={Logo} alt="logo" />
        </Link>
    </StLogo>
       
    <StyledNav>
        <ul>
            <li>
                <Link activeStyle={activeNav} to='/'>Все варинты </Link>
            </li>
            <li>
                <Link activeStyle={activeNav} to='/'>Все варинты </Link>
            </li>
            <li>
                <Link activeStyle={activeNav} to='/'>Все варинты </Link>
            </li>
            <li>
                <Link activeStyle={activeNav} to='/'>Все варинты </Link>
            </li>
        </ul>


    </StyledNav>

    <StContact>
        <a href="tel:0671231233">
            +380671231233</a>
        <a href="http://tel">Написать в
            <br />
            Telegram</a>
        <button className='button'>
            заказать
            <br />
            консультацию
        </button>
    </StContact>
    <Burger nav={[navToggle, setnavToggle]}/>
</StHeader>
);
}

export default Header;