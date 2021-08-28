import { createGlobalStyle } from "styled-components";




const GlobalStyles = createGlobalStyle`
    :root{
        --primary:#8BA4B4;
        --primary2:#567C8B;
        --gray:#f4f5f6;
        --orange:#F07E45;
    }

    *{
        box-sizing: border-box;
    }
   img{
       max-width:100%;
   }
   a{
    text-decoration: none;
    cursor: pointer;
   }
   button{
       cursor: pointer;
       font-size: inherit;
       font-family: inherit;
       padding: 10px 15px;
       font-size: 14px; 
       border-radius: 10px;
   
   }
   .button{
       
    background-color: var(--primary);
       border: solid var(--primary) 1px;
    &:hover{
           background-color:   var(--primary2);
           
       }
   }
`

export default GlobalStyles