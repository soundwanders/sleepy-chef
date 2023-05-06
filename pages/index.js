import MainContainer from '@components/MainContainer';
import { Hero } from '@components/Hero';
import appData from '@constants/appData';

export default function Home() {
  return (
    <MainContainer
      title={appData.title}
      description={appData.description}
    >
      <Hero />
    </MainContainer>
  )
};