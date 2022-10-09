import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import Samples from "@components/Samples";
import Search from "@components/Search";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title={userData.title}
      description="yum"
    >
      <Hero />
      <Search />
      <Samples />
    </ContainerBlock>
  );
}