// src/pages/HomePage.tsx (eller var din HomePage ligger)
import { HiddenPageTitle, PageSection } from '../components/styled/global/Pages';
import Hero from "../components/home/Hero";
import heroImg from "../assets/hero-job.jpg";
import { TeamAvatar } from '../components/home/TeamAvatar';
import { BaseBlockWrap } from '../components/styled/global/Wrappers';
import { OffersCta } from '../components/home/offersCta';
import OccupationPanel from '../components/home/OccupationPanel';

export const HomePage = () => {
  return (
    <PageSection $padding="0 0 3rem 0">
      <HiddenPageTitle>Jobbcentralen</HiddenPageTitle>

      <Hero
        imageSrc={heroImg}
        imageAlt="Laptop och kaffekopp"
        quote={"Hitta jobbet du trivs med\n— låt jobbet hitta dig."}
        author="JobbCentralen"
        height="380px"
      />

      <BaseBlockWrap $p="1rem 0 2rem 0" $maxW="1050px">
        <OffersCta />
      </BaseBlockWrap>

      <BaseBlockWrap $maxW='800px'>
        <OccupationPanel />
      </BaseBlockWrap>
      <BaseBlockWrap $p="3rem 0 2rem 0" $maxW="1050px">
        <TeamAvatar />
      </BaseBlockWrap>
    </PageSection>
  );
};
