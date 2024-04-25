//import { useState } from 'preact/hooks';
import Header from './components/header.tsx';
import  { createGlobalStyle } from 'styled-components';
export function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header />
    </div>
  )
}
const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
font-family: "PT Sans", sans-serif;
font-weight: 400;
font-style: normal;
}
`
