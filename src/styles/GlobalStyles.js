import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
img{
    display:block;
}

body{
    font-family: 'Nunito Sans', sans-serif;
    background: ${(props) => props.theme.color.background}
}
`;
