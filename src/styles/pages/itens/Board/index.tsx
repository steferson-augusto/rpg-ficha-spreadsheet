import { FormEvent, useCallback, useRef } from 'react'
import produce from 'immer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { mutate } from 'swr'
import axios from 'axios'

import { StorageInterface } from '../../../../pages/api/itens'
import List from '../List'
import { Container, ContainerButtons } from './styles'
import BoardContext, { ItemContext } from './context'
import { Form } from '..'
import Modal, { ModalProps } from '../../../components/Modal'
import Input from '../../../components/InputRef'
import Button from '../../../components/Button'

interface BoardProps {
  data: StorageInterface[]
}

const Board: React.FC<BoardProps> = ({ data }) => {
  const modalRef = useRef<ModalProps>(null)
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputWeightRef = useRef<HTMLInputElement>(null)
  const inputNoteRef = useRef<HTMLInputElement>(null)

  const modalRefEdit = useRef<ModalProps>(null)
  const inputNameRefEdit = useRef<HTMLInputElement>(null)
  const inputWeightRefEdit = useRef<HTMLInputElement>(null)
  const inputNoteRefEdit = useRef<HTMLInputElement>(null)

  const listIndexRef = useRef({ value: 0 })
  const itemIndexRef = useRef({ value: 0 })
  const rowRef = useRef({ value: 1 })

  function move(fromList, toList, from, to) {
    const list = produce(data, draft => {
      const dragged = draft[fromList].itens[from]

      draft[fromList].itens.splice(from, 1)
      draft[toList].itens.splice(to, 0, dragged)
    })

    mutate('/api/itens/', list, false)
  }

  const handleSubmitAdd = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const listIndex = listIndexRef.current.value
      const column = data[listIndex].column
      const row = data[listIndex].itens.length + 1

      const values = {
        label: inputNameRef.current.value,
        weight: Number(inputWeightRef.current.value),
        note: inputNoteRef.current.value,
        id: `${new Date().getTime()}`,
        column,
        row
      }

      const storages = produce(data, draft => {
        draft[listIndex].itens.push(values)
      })
      mutate('/api/itens/', storages, false)
      axios.post('/api/item/', values)

      modalRef?.current?.closeModal()
    },
    [data]
  )

  const create = (listIndex: number) => {
    inputNameRef.current.value = ''
    inputWeightRef.current.value = ''
    inputNoteRef.current.value = ''
    listIndexRef.current.value = listIndex

    modalRef?.current?.openModal()
  }

  const edit = (item: ItemContext) => {
    inputNameRefEdit.current.value = item.label
    inputWeightRefEdit.current.value = String(item.weight)
    inputNoteRefEdit.current.value = item.note || ''
    listIndexRef.current.value = item.listIndex
    itemIndexRef.current.value = item.index
    rowRef.current.value = item.row

    modalRefEdit?.current?.openModal()
  }

  const handleSubmitUpdate = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const listIndex = listIndexRef.current.value
      const itemIndex = itemIndexRef.current.value
      const column = data[listIndex].column
      const row = rowRef.current.value

      const values = {
        label: inputNameRefEdit.current.value,
        weight: Number(inputWeightRefEdit.current.value),
        note: inputNoteRefEdit.current.value,
        id: `${new Date().getTime()}`,
        row,
        column
      }

      const storages = produce(data, draft => {
        draft[listIndex].itens[itemIndex] = values
      })

      mutate('/api/itens/', storages, false)
      axios.put('/api/item/', values)

      modalRefEdit?.current?.closeModal()
    },
    [data]
  )

  const handleDelete = useCallback(() => {
    const listIndex = listIndexRef.current.value
    const itemIndex = itemIndexRef.current.value

    const storages = produce(data, draft => {
      draft[listIndex].itens.splice(itemIndex, 1)
      draft[listIndex].itens.forEach((item, index) => {
        item.row = index + 1
      })
    })

    mutate('/api/itens/', storages, false)
    const storage = storages[listIndex]
    axios.patch('/api/item/', { storage })

    modalRefEdit?.current?.closeModal()
  }, [data])

  return (
    <DndProvider backend={HTML5Backend}>
      <BoardContext.Provider value={{ lists: data, move, create, edit }}>
        <Container>
          {data?.map((storage, index) => (
            <List key={storage.column} data={storage} index={index} />
          ))}
        </Container>

        <Modal ref={modalRef}>
          <div className="modal-body">
            <h2 className="modal-title">Adicionar item</h2>
            <Form onSubmit={handleSubmitAdd}>
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

        <Modal ref={modalRefEdit}>
          <div className="modal-body">
            <h2 className="modal-title">Editar item</h2>
            <Form onSubmit={handleSubmitUpdate}>
              <Input
                ref={inputNameRefEdit}
                name="label-edit"
                label="Nome"
                type="text"
                pattern=".+"
                required
              />
              <Input
                ref={inputWeightRefEdit}
                name="weight-edit"
                label="Peso"
                type="number"
                pattern=".+"
                required
              />
              <Input
                ref={inputNoteRefEdit}
                name="note-edit"
                label="Nota"
                type="text"
                pattern=".+"
              />
              <ContainerButtons>
                <Button
                  icon="trash"
                  background="#CF6679"
                  onClick={handleDelete}
                  type="button"
                >
                  APAGAR
                </Button>
                <Button icon="save" type="submit">
                  SALVAR
                </Button>
              </ContainerButtons>
            </Form>
          </div>
        </Modal>
      </BoardContext.Provider>
    </DndProvider>
  )
}

export default Board
