import styled from 'styled-components'

interface DadoProps {
  length: number
  background?: string
}

export const Dado = styled.input<DadoProps>`
  border: none;
  background-image: none;
  background-color: ${({background}) => background || '#1f1f1f'};
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: var(--text-color);
  font-size: 16px;
  width: ${({ length }) => `${(length + 1) * 12}px`};
  min-width: 30px;
  text-align: center;
  outline: none;
  padding: 4px 8px;
  border-radius: 3px;
`

interface TooltipedProps {
  background?: string
}

export const Tooltiped = styled.div<TooltipedProps>`
  position: relative;
  border-radius: 6px;

  &::before, &::after {
    --scale: 0;
    --arrow-size: 10px;
    --tooltip-color: ${({background}) => background || '#1f1f1f'};

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
    max-width: 30vh;
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
