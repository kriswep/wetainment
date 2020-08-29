import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --header-text-color: #000000;
  --header-padding: 3.75rem 16.5rem;
  --header-h1-margin: 5.625rem 0;
  --header-h1-font-size: 4rem;
  --header-h1-line-height: 5.5rem;
  --header-h2-font-size: 1.5rem;
  --header-h2-line-height: 2rem;
  --header-h3-font-size: 1.125rem;
  --header-h3-line-height: 1.5rem;
}

@media (max-width: 70rem) { 
  :root {
    --header-padding: 3.75rem 10.5rem;
  }
 }
@media (max-width: 52.5rem) { 
  :root {
    --header-padding: 3.75rem 7rem;
  }
 }
@media (max-width: 45rem) { 
  :root {
    --header-padding: 3.75rem 3.75rem;
    --header-h1-margin: 3.75rem 0;
    --header-h1-font-size: 3rem;
    --header-h1-line-height: 3.5rem;
  }
 }
@media (max-width: 40rem) { 
  :root {
    --header-padding: 1rem 1rem;
    --header-h1-margin: 1rem 0;
  }
 }
@media (max-width: 32.5rem) { 
  :root {
    --header-h1-font-size: 2rem;
    --header-h1-line-height: 2.5rem;
  }
 }
@media (max-width: 23.75rem) { 
  :root {
  --header-h2-font-size: 1.125rem;
  --header-h2-line-height: 1.5rem;
  }
 }

.gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
}

/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
 .gatsby-highlight {
    overflow: auto;
  }
  
  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   * 3. Adjust the position of the line numbers
   */
  .gatsby-highlight pre[class*="language-"] {
    /* background-color: transparent; */
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; 
    min-width: 100%; 
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.2em;
  }
`;

export default GlobalStyle;
