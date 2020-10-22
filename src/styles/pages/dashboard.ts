import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 10px;
`

export const Content = styled.div`
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`

export const Card = styled.div`
  position: relative;
  max-width: 280px;
  height: 160px;
  background: #52307c;
  margin: 30px 10px;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;

  &:hover {
    height: 340px;

    ${Content} {
      visibility: visible;
      opacity: 1;
      margin-top: -40px;
      transition-delay: 0.3s;

      p {
        margin: 15px 0px;
        color: #c1c1c1;
      }
    }
  }
`

export const ImageBox = styled.div`
  position: relative;
  width: 240px;
  height: 180;
  top: -50px;
  left: 5px;
  z-index: 1;

  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`
