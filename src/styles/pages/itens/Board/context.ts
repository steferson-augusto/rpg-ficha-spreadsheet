import { createContext } from 'react'

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
  move: (fromList: number, toList: number, from: number, to: number) => void
  create: (listIndex: number) => void
  edit: (item: ItemContext) => void
} 

export default createContext<ContextInterface>({
  lists: [], move: () => {}, create: () => {}, edit: () => {}
})