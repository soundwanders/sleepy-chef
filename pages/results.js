import ContainerBlock from '@components/ContainerBlock';
import { SearchResults } from '@components/SearchResults';
import appData from '@constants/appData';

export default function Results() {
  return (
    <ContainerBlock title={appData.title}>
      <SearchResults/>
    </ContainerBlock>
  )
};
