import React from 'react';
import Header from '../components/header/Header';
import Global from './styles/Global.jsx';
import 'normalize.css';
import Typography from './styles/Typography';
const Layout = ( {children}) => {
   
 
    return (
        <> 
       <Global/>
       <Typography/>
      <Header/> 
            {children} 
          
        </>
    );
}

export default Layout;