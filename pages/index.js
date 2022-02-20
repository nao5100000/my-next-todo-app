import { Container, Flex } from '@chakra-ui/react'
import { useRecoilValue } from "recoil";
import { todoState } from "../src/hooks/TodoState";
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Title from '../src/atoms/text/Title'
import Header from '../src/organisms/Header'
import TodoItem from '../src/organisms/TodoItem'
import styles from '../styles/Home.module.css'
import Masonry from 'react-masonry-css'
import ButtonWrapper from '../src/molucules/ButtonWrapper'
import escapeStringRegexp from "escape-string-regexp";

export default function Home() {
  const todos = useRecoilValue(todoState);
  const [searchKeyword, updateSearchKeyword] = useState("");
  const onInput = (e) => {
    updateSearchKeyword(e.target.value)
  }

  const filterdTodos = todos.filter((item) => {
    const escapedText = escapeStringRegexp(searchKeyword.toLowerCase());
    return new RegExp(escapedText).test(item.title)
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header onInput={onInput} />
        <Container maxWidth="960px" marginTop="100px">
          <Flex justify="space-between" marginBottom="30px" borderBottom="1px solid #ccc">
            <Title children={"Todo List"} />
            <ButtonWrapper />
          </Flex>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
              filterdTodos.map((item) => (
                <TodoItem
                  key={item.id}
                  todoSingle={item}
                  todoTitle={item.title}
                  todoDetails={item.details}
                  todoPriority={item.priority}
                  todoStatus={item.status}
                  todoId={item.id}
                />
              ))
            }
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
