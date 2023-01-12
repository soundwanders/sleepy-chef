import ContainerBlock from "@components/ContainerBlock";
import SearchResults from "@components/SearchResults";
import userData from "@constants/data";

export default function Results() {
  return (
    <ContainerBlock title={userData.title}>
      <SearchResults />
    </ContainerBlock>
  )
};
