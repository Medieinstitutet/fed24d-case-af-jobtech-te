import { PageSection, PageTitle } from '../components/styled/Globals/Pages'
import Hero from "../components/hero/Hero";
import heroImg from "../components/styled/hero-job.jpg";
import TopOccupations from '../components/TopOccupationsBar'

export const HomePage = () => {

  return (
    <PageSection>
      <PageTitle> Home Page</PageTitle>
      <Hero
        imageSrc={heroImg} 
        imageAlt="Laptop och kaffekopp"
        title="JobbCentralen"
        quote="Hitta jobbet du trivs med — låt jobbet hitta dig."
        author="JobbCentralen"
        height="380px"
      />
      <TopOccupations />
    </PageSection>
  )
}

