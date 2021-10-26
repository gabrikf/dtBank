import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body:#969cb3;

        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
// we'll use rem in this app, so, 1 rem = default size of app -- 1 rem = 16px; 
// but if the users set another size for your device, if we use px instead %, we'll change what the user had set;
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased; // sharper fonts  
    }

    // o inpumt, textarea and button don't get by default the font of the body, because of this we need to add for each.
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
