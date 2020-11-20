import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-color: #121212;
    --text-color: #e1e1e6;
    --surface-1: #1f1f1f;
    --surface-2: #333;
    --primary: #BB86FC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font: 400 16px Roboto, sans-serif;
  }

  #check {
    display: none;
  }

  #check:checked ~ .sidebar{
    left: -190px;
  }

  #check:checked ~ .sidebar a span{
    display: none;
  }

  #check:checked ~ .sidebar a{
    font-size: 20px;
    margin-left: 170px;
    width: 80px;
  }

  .content{
    margin-left: 250px;
    padding-top: 40px;
    height: 100vh;
    transition: 0.5s;
  }

  #check:checked ~ .content{
    margin-left: 60px;
  }
`
