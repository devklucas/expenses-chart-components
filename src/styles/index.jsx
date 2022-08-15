import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }
    :root{
        --soft-red: hsl(10, 79%, 65%);
        --cyan: hsl(186, 34%, 60%) ;
        --dark-brown: hsl(25, 47%, 15%);
        --medium-brown: hsl(28, 10%, 53%);
        --cream: hsl(27, 66%, 92%);
        --very-pale-orange: hsl(33, 100%, 98%); 
    }
`      