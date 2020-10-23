import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #22242A;
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
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
  }

  span{
    color: #19B3D3;
  }
`

export const LogoutButton = styled.a`
  padding: 5px;
  background: #19B3D3;
  text-decoration: none;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  transition-property: background;

  &:hover {
    background: #0B87A6;
  }

  label {
    z-index: 1;
    color: #fff;
    position: fixed;
    cursor: pointer;
    left: 300px;
    font-size: 20px;
    margin: 5px 0;
    transition: 0.5s;
    transition-property: color;

    &:hover {
      color: #19B3D3;
    }
  }
`

export const Sidebar = styled.div`
  background: #2f323a;
  margin-top: 40px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 10px;
  }

  h4 {
    color: #ccc;
    margin-top: 0;
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    display: block;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;

    &:hover {
      background: #19B3D3;
    }
  }

  i {
    padding-right: 10px;
  }
`

export const Center = styled.div`
  text-align: center;
`