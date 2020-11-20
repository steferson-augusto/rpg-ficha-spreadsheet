import produce from 'immer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { mutate } from 'swr'

import { StorageInterface } from '../../../../pages/api/itens'
import List from '../List'
import { Container } from './styles'
import BoardContext from './context'

interface BoardProps {
  data: StorageInterface[]
}

const Board: React.FC<BoardProps> = ({ data }) => {
  function move(fromList, toList, from, to) {
    const list = produce(data, draft => {
      const dragged = draft[fromList].itens[from]

      draft[fromList].itens.splice(from, 1)
      draft[toList].itens.splice(to, 0, dragged)
    })

    mutate('/api/itens/', list, false)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <BoardContext.Provider value={{ lists: data, move }}>
        <Container>
          {data.map((storage, index) => (
            <List key={storage.column} data={storage} index={index} />
          ))}
        </Container>
      </BoardContext.Provider>
    </DndProvider>
  )
}

export default Board
