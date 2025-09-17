import { HiddenPageTitle, PageSection } from '../components/styled/global/Pages'
import Hero from "../components/home/Hero"
import heroImg from "../assets/hero-job.jpg";
import TopOccupations from '../components/home/TopOccupationsBar'

export const HomePage = () => {

  return (
    <PageSection>
      <HiddenPageTitle> Jobcentralen</HiddenPageTitle>
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

