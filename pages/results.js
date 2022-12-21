import Head from "next/head";
import ContainerBlock from "@components/ContainerBlock";
import Recipes from "@components/Recipes";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock title={userData.title}>
      <Recipes />
    </ContainerBlock>
  )
};
