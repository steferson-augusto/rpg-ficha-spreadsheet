import Head from 'next/head'

import Structure from '../styles/components/Structure'
import useSWR from '../hooks/useSWR'
import Animation from '../styles/components/Animation'
import { Body } from '../styles/pages/itens'

const Carteira = () => {
  return (
    <div>
      <Head>
        <title>Carteira</title>
      </Head>

      <main>
        <Structure title="Itens">
          <Body>
            <p>Carteira</p>
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export default Carteira
