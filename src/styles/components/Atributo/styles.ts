import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 25px auto;
  border-radius: 3px;
  padding: 15px 8px;
  background-color: var(--surface-1);

  label {
    position: absolute;
    top: -28px;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--surface-1);
    color: var(--text-color);
    padding: 3px 10px;
    border-radius: 3px;
    margin: 10px 0px;
  }
`
