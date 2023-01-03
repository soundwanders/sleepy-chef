import Head from "next/head";
import ContainerBlock from "@components/ContainerBlock";
import Results from "@components/Results";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock title={userData.title}>
      <Results />
    </ContainerBlock>
  )
};
