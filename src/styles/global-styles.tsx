import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --theme-text-color: var(--invert)
  }
  body{
    margin:0;
    padding:0;
  }
  
  html[data-theme=dark]{
    --theme: black;
    --invert: white;
  }
  html[data-theme=light]{
    --theme: white;
    --invert: black;
  }

`