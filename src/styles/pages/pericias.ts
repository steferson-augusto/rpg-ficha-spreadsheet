import styled from 'styled-components'

export const Body = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 300px;
  background-color: var(--surface-1);
  border-radius: 3px;

  input {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    color: var(--text-color);
    font-size: 16px;
    width: 100%;
    outline: none;
    padding: 4px 8px;
    padding-right: 27px;
  }

  i {
    position: absolute;
    font-size: 14px;
    right: 6px;
    top: 6px;
  }
`