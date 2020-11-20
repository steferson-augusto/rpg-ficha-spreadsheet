import styled from 'styled-components'

export const Close = styled.a`
  position: absolute;
  width: 30px;
  right: calc((100vw / 2) - 215px);
  top: calc(10vh - 20px);
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #ff4545;
  border-radius: 50%;
  font-size: 16px;
  color: #8d0000;
  text-decoration: none;
  z-index: 99999;
  cursor: pointer;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99998;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;

  .modal-body {
    width: 400px;
    margin: 10vh auto;
    padding: 15px 20px;
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    .modal-title {
      text-align: center;

      &::after {
        content: '';
        width: 150px;
        height: 3px;
        background: var(--primary);
        display: block;
        margin: 10px auto;
      }
    }
  }
`
