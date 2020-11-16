import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 25px auto;
  border-radius: 3px;
  padding: 15px 8px;
  background-color: var(--surface-1);

  label {
    position: absolute;
    top: -28px;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--surface-1);
    color: var(--text-color);
    padding: 3px 10px;
    border-radius: 3px;
    margin: 10px 0px;
  }
`

export const Tooltiped = styled.div`
  position: relative;
  border-radius: 6px;

  &::before, &::after {
    --scale: 0;
    --arrow-size: 10px;
    --tooltip-color: var(--surface-2);

    position: absolute;
    top: -.25rem;
    left: 50%;
    transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
    transition: 150ms transform;
    transform-origin: bottom center;
  }

  &::before {
    --translate-y: calc(-100% - var(--arrow-size));

    content: attr(data-tooltip);
    color: white;
    padding: .5rem;
    border-radius: .3rem;
    text-align: center;
    width: max-content;
    max-width: 100%;
    background: var(--tooltip-color);
  }

  &:hover::before, &:hover::after {
    --scale: 1;
  }

  &::after {
    --translate-y: calc(-1 * var(--arrow-size));

    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
  }
`

interface DadoProps {
  length: number
}

export const Dado = styled.input<DadoProps>`
  border: none;
  background-image: none;
  background-color: var(--surface-2);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: var(--text-color);
  font-size: 16px;
  width: ${({ length }) => `${(length + 1) * 12}px`};
  text-align: center;
  outline: none;
  padding: 4px 8px;
  border-radius: 3px;
`