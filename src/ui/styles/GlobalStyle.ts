import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, button, input, li, a {
  box-sizing: border-box;    
    padding: 0;
    margin: 0;
    overflow-x : hidden;

    outline: none;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
    width: 100vw;
    height: auto;

    font-family: 'Roboto', sans-serif;
    color: var(--white__100);
    font-size: 1rem;

    background: var(--dark__background);
  }

  :root {
    --dark__background:linear-gradient(90deg, #152331 0%, #130421 45.83%, #000000 100%);
    --white__100: #FFFFFF;
    --primary__purple: #E0AAFF;
    --secondary__purple: #C77DFF;
    --tertiary__purple: #9D4EDD;
    --quaternary__purple: #7B2CBF;
    --quinary__purple: #5A189A;
    --quinary__purple45: #5A189A45;
    --quinary__purple15: #5A189A15;
    --senary__purple: #3C096C;
    --septenary__purple: #240046;
    --septenary__purple35: #24004635;
    --octonary__purple: #10002B;
    --octonary__purple30: #10002B30;
    --golden__yellow: #DAA520;
    --orange__html: #FF5733;
    --blue__css3: #0000FF;
    --yellow__js: #F0DB4F;
    --blue__reactjs:#61DBFB;
    --blue__materialui: #2196F3;
    --orange__git: #F1502F;
  }
`;
