import { createContext } from 'react'

import { StorageInterface } from '../../../../pages/api/itens'

interface ContextInterface {
  lists: StorageInterface[]
  move: (fromList: number, toList: number, from: number, to: number) => void
} 

export default createContext<ContextInterface>({
  lists: [], move: () => {}
})