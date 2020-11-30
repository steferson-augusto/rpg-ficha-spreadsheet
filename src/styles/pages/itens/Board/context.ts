import { createContext, MutableRefObject } from 'react'

import { StorageInterface } from '../../../../pages/api/itens'

export interface ItemContext {
  label: string
  note?: string
  weight: number
  index: number
  listIndex: number
  row: number
}

interface ContextInterface {
  lists: StorageInterface[]
  oldIndex: MutableRefObject<{ value: number }>
  move: (fromList: number, toList: number, from: number, to: number) => void
  create: (listIndex: number) => void
  edit: (item: ItemContext) => void
  setOldIndex: (list: number) => void
  updateStorage: (dragged: number, target: number) => void
} 

export default createContext<ContextInterface>({
  lists: [],
  oldIndex: { current: { value: -1 } },
  move: () => {},
  create: () => {},
  edit: () => {},
  setOldIndex: () => {},
  updateStorage: () => {}
})