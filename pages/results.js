import ContainerBlock from "@components/ContainerBlock";
import { SearchResults } from "@components/SearchResults";
import appData from "@constants/data";

export default function Results() {
  return (
    <ContainerBlock title={appData.title}>
      <SearchResults />
    </ContainerBlock>
  )
};
