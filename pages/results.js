import MainContainer from '@components/MainContainer';
import { SearchResults } from '@components/recipes/SearchResults';
import appData from '@constants/appData';

export default function Results() {
  return (
    <MainContainer title={appData.title}>
      <SearchResults/>
    </MainContainer>
  )
};
