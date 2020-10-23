import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121214;
    color: #e1e1e6;
    font: 400 16px Roboto, sans-serif;
  }

  .customButton {
    border-radius: 4px;
    background-color: #121214;
    border: 2px solid #fff;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    padding: 5px 10px;
    width: 135px;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 0;
    opacity: 0.6;
    transition: all 0.5s;
    box-shadow: 0 0 4px #fff;
    background-position: center;

    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;

      &:after {
        content: '\\2764';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }
    }

    &:hover {
      opacity: 1;
      background: #86027a radial-gradient(circle, transparent 1%, #86027a 1%)
        center/15000%;
      span {
        padding-right: 25px;

        &:after {
          opacity: 1;
          right: 0;
        }
      }
    }

    &:active {
      background-color: #444;
      background-size: 100%;
      transition: background 0s;
    }
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
    background: url('background.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    transition: 0.5s;
  }

  #check:checked ~ .content{
    margin-left: 60px;
  }
`
