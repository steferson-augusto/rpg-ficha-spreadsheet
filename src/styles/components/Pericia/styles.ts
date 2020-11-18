import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  padding: 15px 8px;
  background-color: var(--bg-color);
`

export const Note = styled.p`
  background-color: var(--surface-1);
  border-radius: 3px;
  flex: 1;
  padding: 7px;
  margin: 10px;
  font-size: 13px;
`;