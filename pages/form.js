import MainContainer from '@components/MainContainer';
import RecipeForm from '@components/recipes/RecipeForm';
import appData from '@constants/appData';

export default function Form() {
  return (
    <MainContainer title={appData.title}>
      <RecipeForm />
    </MainContainer>
  )
};
