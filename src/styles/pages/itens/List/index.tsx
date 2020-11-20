import { FormEvent, useCallback, useContext, useMemo, useRef } from 'react'
import { useDrop } from 'react-dnd'
import axios from 'axios'
import { mutate } from 'swr'
import produce from 'immer'

import { StorageInterface } from '../../../../pages/api/itens'
import Card from '../Card'
import { Container } from './styles'
import { DropInterface } from '../Card'
import Modal, { ModalProps } from '../../../components/Modal'
import Input from '../../../components/InputRef'
import { Form } from '..'
import Button from '../../../components/Button'
import BoardContext from '../Board/context'

interface ListProps {
  data: StorageInterface
  index: number
}

const List: React.FC<ListProps> = ({ data, index: listIndex }) => {
  const { lists } = useContext(BoardContext)
  const modalRef = useRef<ModalProps>(null)
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputWeightRef = useRef<HTMLInputElement>(null)
  const inputNoteRef = useRef<HTMLInputElement>(null)

  const [, dropRef] = useDrop<DropInterface, null, null>({
    accept: 'CARD'
  })

  const sum = useMemo(() => {
    return data.itens.reduce((total, { weight }) => total + weight, 0)
  }, [data.itens])

  const handleAdd = useCallback(() => {
    modalRef?.current?.openModal()
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      const column = data.column
      const row = data.itens.length + 1

      const values = {
        label: inputNameRef.current.value,
        weight: Number(inputWeightRef.current.value),
        note: inputNoteRef.current.value,
        id: `${row}-${column}`,
        column,
        row
      }

      const storages = produce(lists, draft => {
        draft[listIndex].itens.push(values)
      })
      mutate('/api/itens/', storages, false)
      axios.post('/api/item/', values)

      modalRef.current.closeModal()
    },
    [data]
  )

  return (
    <Container>
      <header>
        <h2>
          {data.label}
          {sum > 0 && <label>{sum} kg</label>}
        </h2>
        <button type="button" onClick={handleAdd}>
          <i className="fas fa-plus" />
        </button>
      </header>

      <ul ref={dropRef}>
        {data.itens.map((item, index) => (
          <Card
            key={item.id}
            listIndex={listIndex}
            index={index}
            label={item.label}
            weight={item.weight}
            note={item.note}
          />
        ))}
      </ul>

      <Modal ref={modalRef}>
        <div className="modal-body">
          <h2 className="modal-title">Adicionar item</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              ref={inputNameRef}
              name="label"
              label="Nome"
              type="text"
              pattern=".+"
              required
            />
            <Input
              ref={inputWeightRef}
              name="weight"
              label="Peso"
              type="number"
              pattern=".+"
              required
            />
            <Input
              ref={inputNoteRef}
              name="note"
              label="Nota"
              type="text"
              pattern=".+"
            />
            <Button icon="plus" type="submit">
              ADICIONAR
            </Button>
          </Form>
        </div>
      </Modal>
    </Container>
  )
}

export default List
