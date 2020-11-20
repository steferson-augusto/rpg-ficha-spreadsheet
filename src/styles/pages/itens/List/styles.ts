import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  
  & + div {
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;

      label {
        font-size: 12px;
        background-color: var(--surface-2);
        border-radius: 3px;
        padding: 3px 7px;
        margin-left: 10px;
      }
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: var(--primary);
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`