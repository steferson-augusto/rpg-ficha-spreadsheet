import { useCallback, useEffect, useRef, useState } from 'react'
import Head from 'next/head'

import Structure from '../styles/components/Structure'
import useSWR from '../hooks/useSWR'
import Animation from '../styles/components/Animation'
import { Body } from '../styles/pages/itens'
import Collapsible from '../styles/components/Collapsible'
import { Container, List } from '../styles/components/Collapsible/styles'
import { StorageInterface } from './api/itens'
import Board from '../styles/pages/itens/Board'

const Itens: React.FC = () => {
  const { data, loading } = useSWR<StorageInterface[]>('/api/itens/')

  return (
    <div>
      <Head>
        <title>Itens</title>
      </Head>

      <main>
        <Structure title="Itens">
          <Body>
            {loading ? <Animation width="50vh" /> : <Board data={data} />}
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export default Itens
