import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface-1);
  padding: 20px;
  width: 100%;
  height: 30px;
`

export const Mark = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      padding: 0px 10px;
    }
  }
`

export const Left = styled.div`
  h3 {
    color: var(--text-color);
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
  }

  span{
    color: var(--primary);
  }
`

export const Sidebar = styled.div`
  background: var(--surface-2);
  margin-top: 40px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;

  h4 {
    color: var(--text-color);
    margin: 15px 0px;
  }

  a {
    color: var(--text-color);
    display: block;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;

    &:hover {
      background: var(--primary);
    }
  }

  i {
    padding-right: 10px;
  }
`

export const Center = styled.div`
  text-align: center;
`