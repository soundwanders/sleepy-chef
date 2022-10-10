import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import userData from "@constants/data";
import { ContextProvider } from '@components/Context';

export default function Home() {
  return (
    <ContextProvider>
      <ContainerBlock
        title={userData.title}
        description={userData.description}
      >
        <Hero />
      </ContainerBlock>
    </ContextProvider>
  )
};