import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Recipes from "@components/Recipes";
import { ContextProvider } from '@components/Context';

export default function Results(recipes) {
  return (
    <ContextProvider>
      <ContainerBlock title="Results">
        <Recipes key={recipes.id} />
      </ContainerBlock>
    </ContextProvider>
  )
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/recipes")
  const recipes = await res.json()
  return {
    props: {
      recipes
    }
  }
};