import styled, { css } from 'styled-components'

interface ContainerProps {
  isDragging: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface-1);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 1px 3px 0 #000;
  cursor: grab;

  &:hover > i {
    opacity: ${props => props.isDragging ? 0 : 1};
  }

  main {
    display: flex;
    align-items: center;
    flex: 1;

    p {
    font-weight: 500;
    line-height: 20px;
    
    label {
      color: #bbb;
      font-size: 12px;
      cursor: grab;
      padding-left: 12px;
    }
  }

  i {
      font-size: 12px;
      margin-left: 12px;
      background-color: var(--primary);
      box-shadow: 0 1px 3px 0 #121212;
      padding: 3px 12px;
      border-radius: 3px;
      cursor: pointer;
      color: #222;
    }
  }

  & > i {
    font-size: 14px;
    padding: 8px;
    cursor: pointer;
    opacity: 0;
    border-radius: 20px;
    background-color: var(--surface-2);
    box-shadow: 0 1px 3px 0 #111;
    transition: 400ms;
  }

  ${props => props.isDragging && css`
    border: 2px dashed var(--surface-2);
    padding-top: 11px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    p, label, i {
      opacity: 0;
    }
  `}
`