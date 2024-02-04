import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    a, a:hover{
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    audio, img, iframe, video{
        display: inline-block;
        height: auto;
        width: 100%;
    }
  }
`;

export { Reset };
