import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { Container, Close } from './styles'

export interface ModalProps {
  openModal: () => void
  closeModal: () => void
}

interface Props {
  children: React.ReactNode
}

const Modal: React.ForwardRefRenderFunction<ModalProps, Props> = (
  { children },
  ref
) => {
  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [visible])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [visible])

  useImperativeHandle(ref, () => ({ openModal, closeModal }))

  if (!visible) return null

  return (
    <Container>
      <Close onClick={closeModal}>x</Close>
      {children}
    </Container>
  )
}

export default forwardRef(Modal)
