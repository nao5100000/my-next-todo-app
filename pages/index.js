import { Container, Flex } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'
import Title from '../src/atoms/text/Title'
import Header from '../src/organisms/Header'
import TodoItem from '../src/organisms/TodoItem'
import styles from '../styles/Home.module.css'
import Masonry from 'react-masonry-css'
import ButtonWrapper from '../src/molucules/ButtonWrapper'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Container maxWidth="960px" marginTop="100px">
          <Flex justify="space-between" marginBottom="30px" borderBottom="1px solid #ccc">
            <Title children={"Todo List"} />
            <ButtonWrapper />
          </Flex>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {/* array of JSX items */}
            <TodoItem />
            <TodoItem />
          </Masonry>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
