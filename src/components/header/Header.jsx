import {Link} from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Burger from './Burger';
import Logo from './logo.svg';
import Nav from './Nav';
import StyledVariables  from '../styles/StyledVariables';
import Telegram from './Telegram';
const {xs,sm,md} = StyledVariables;
        const StHeader = styled.header `
        position: sticky;
        flex-wrap: wrap;
        top: 0px;
        background-color: #fff; 
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:solid red 1px;
        padding:10px; 
` ;
        const StLogo = styled.div `
        width: 40px;
            a{
                display: block;
            }
        `;
        const openCont= css`
        display: flex;
        `;
        const closeCont= css`
        display: none;
        `;
        const StyledNavContainer= styled.div`
             ${({nav})=>nav?openCont:closeCont}
            width: 100%;
            justify-content: center;
            flex-direction: column;
        `;

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
    <Burger nav={[navToggle, setnavToggle]}/>
            <StyledNavContainer nav={navToggle}> 
        <Nav/>

    <StContact>
        <a href="tel:0671231233">
            +380671231233</a>
      <Telegram/>
        <button className='button'>
            заказать
            <br />
            консультацию
        </button>
    </StContact>
    </StyledNavContainer>

</StHeader>
);
}

export default Header;




