import { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/organisms/Header";
import { todoState } from "../src/hooks/TodoState";
import { Container } from "@chakra-ui/react";
import TitleInput from "../src/molucules/input/TitleInput";
import DetailTextarea from "../src/molucules/input/DetailTextarea";
import Title from "../src/atoms/text/Title";
import RadioSelectWrapper from "../src/organisms/RadioSelectWrapper";
import DatePicker from "../src/molucules/DatePicker";
import CreateButton from "../src/atoms/button/CreateButton";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  // createButtonを押した際の機能
  const [todos, setTodos] = useRecoilState(todoState);
  const router = useRouter();
  const handleCreateTodo = () => {
    const newTodos = [
      {
        title,
        details,
        priority,
        status,
        date,
      },
      ...todos,
    ];
    setTodos(newTodos);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Container
          maxWidth="800px"
          width="90%"
          marginTop="100px"
          marginBottom="90px"
        >
          <Title children="New Todo" />
          <TitleInput setTitle={setTitle} title={title} />
          <DetailTextarea setDetails={setDetails} details={details} />
          <RadioSelectWrapper
            setPriority={setPriority}
            priority={priority}
            setStatus={setStatus}
            status={status}
          />
          <DatePicker />
          <CreateButton handleCreateTodo={handleCreateTodo} />
        </Container>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default NewTodo;
