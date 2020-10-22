import styled from 'styled-components'

export interface ButtonProps {
  colorText: string
  hoverColorText: string
  bgColor: string
  text?: string
  lineColor: string
  destiny?: string
}

export const Button = styled.a<ButtonProps>`
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.colorText};
  background: ${props => props.bgColor};
  letter-spacing: 2px;
  font-size: 16px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${props => props.hoverColorText};
    span {
      &:nth-child(1) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
      }

      &:nth-child(2) {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
      }

      &:nth-child(3) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }

      &:nth-child(4) {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }
    }
  }

  span {
    display: block;
    position: absolute;
    background: ${props => props.lineColor};

    &:nth-child(1) {
      left: 0;
      top: 0;
      width: 1px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
    }

    &:nth-child(2) {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }

    &:nth-child(3) {
      right: 0;
      bottom: 0;
      width: 1px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }

    &:nth-child(4) {
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }
  }
`
