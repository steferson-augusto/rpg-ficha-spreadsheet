import Head from 'next/head'

import { Text } from '../styles/pages/home'
import { Body } from '../styles/components'
import Structure from '../styles/components/Structure'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Structure title="Home">
          <p>hello worlds</p>
        </Structure>
      </main>
    </div>
  )
}

export default Home
