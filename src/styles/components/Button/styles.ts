import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  icon?: string
  background?: string
}

export const Container = styled.button<ButtonProps>`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  padding: 10px 16px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: ${({ background }) => background || 'var(--primary)'};
  color: #222;

  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${props => {
      const color = props.background || '#BB86FC'
      return darken(0.1, color)
    }};
  }

  & > * {
    position: relative;
  }

  span {
    display: block;
    padding: 12px 24px;
  }

  i {
    display: block;
    padding-right: 8px;
  }

  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`
