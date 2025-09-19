


import { HiddenPageTitle, PageSection } from '../components/styled/global/Pages'
import Hero from "../components/home/Hero"
import heroImg from "../assets/hero-job.jpg";
import TopOccupations from '../components/home/TopOccupationsBar'
import { TeamAvatar } from '../components/home/TeamAvatar';
import { BaseBlockWrap } from '../components/styled/global/Wrappers';

export const HomePage = () => {

  return (
    <PageSection $padding='0 0 3rem 0'>
      <HiddenPageTitle> Jobcentralen</HiddenPageTitle>
      <Hero
        imageSrc={heroImg}
        imageAlt="Laptop och kaffekopp"
        quote={"Hitta jobbet du trivs med\n— låt jobbet hitta dig."}
        author="JobbCentralen"
        height="380px"
      />
      <TopOccupations />
      <BaseBlockWrap $gap='2rem' $maxW='1050px'>
        <TeamAvatar />
      </BaseBlockWrap>
    </PageSection>
  )
}

