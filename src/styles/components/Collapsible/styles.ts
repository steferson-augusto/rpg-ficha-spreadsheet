import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 30px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`

  label {
    display: block;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px;
    background: var(--surface-1);

    &:hover{
      background: var(--surface-2);
    }

    i {
      float: right;
      font-size: 20px;
    }
  }

  input[type="checkbox"]{
    position: absolute;
    left: -9999px;

    &:checked ~ .item-body{
      height: 100%;
      transform-origin: top;
      transition: transform .2s ease-out;
      transform: scaleY(1); 
    }

    &:checked + label{
      background: var(--surface-2);
      border-radius: 3px 3px 0px 0px;
    }
  }

  input[type="checkbox"] ~ .item-body{
    height: 0;
    transform: scaleY(0);
  }

  .item-body {
    width: 100%;
    border: solid 1px var(--surface-2);
    margin-bottom: 5px;
    border-radius: 0px 0px 3px 3px;
  }
`;
