import ContainerBlock from "@components/ContainerBlock";
import { RecipeResults } from "@components/RecipeResults";
import userData from "@constants/data";

export default function Results() {
  return (
    <ContainerBlock title={userData.title}>
      <RecipeResults />
    </ContainerBlock>
  )
};
