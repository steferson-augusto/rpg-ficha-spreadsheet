import styled from 'styled-components'

interface InputProps {
  error: boolean
  width?: string
}

export const Message = styled.p<InputProps>`
  font-size: 12px;
  color: var(--${({ error }) => (error ? 'error' : 'text-color')});
  margin-top: 3px;
`

export const InputField = styled.div<InputProps>`
  width: 100%;
  max-width: ${({ width }) => width ?? '300px'};
  position: relative;
  margin-top: 30px;

  input {
    color: var(--text-color);
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    background: transparent;

    &:valid,
    &:focus {
      border-bottom: 2px solid
        var(--${({ error }) => (error ? 'error' : 'primary')});
    }
  }

  label {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    top: 0;
    left: 0;
    right: 0;
    color: #616161;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  input:valid + label,
  input:focus + label {
    color: var(--${({ error }) => (error ? 'error' : 'primary')});
    font-size: 0.8rem;
    top: -30px;
    pointer-events: none;
  }

  input:disabled + label {
    top: -30px;
    pointer-events: none;
  }
`
