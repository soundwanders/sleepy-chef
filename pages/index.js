import ContainerBlock from '@components/ContainerBlock';
import { Hero } from '@components/Hero';
import appData from '@constants/appData';

export default function Home() {
  return (
    <ContainerBlock
      title={appData.title}
      description={appData.description}
    >
      <Hero />
    </ContainerBlock>
  )
};