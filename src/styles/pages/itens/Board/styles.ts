import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100vh - 40px);
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 14px;
    background: var(--primary);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px var(--bg-color);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--surface-1);
    border: solid 4px transparent;
    border-radius: 10px;
  }
`