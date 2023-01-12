import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title={userData.title}
      description={userData.description}
    >
      <Hero />
    </ContainerBlock>
  )
};