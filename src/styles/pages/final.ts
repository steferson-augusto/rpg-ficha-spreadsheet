import styled from 'styled-components'

export const Container = styled.div`
  width: 65%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.h4`
  width: 100%;
  padding: 20px 0;
  transition: text-shadow 0.6s;

  &:hover {
    text-shadow: 0 0 20px #ab20fd;
  }
`
