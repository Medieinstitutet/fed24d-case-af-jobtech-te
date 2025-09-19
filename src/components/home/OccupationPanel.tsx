// src/components/home/OccupationPanel.tsx
import TopOccupationsBar from "./TopOccupationsBar";
import { OccupationButtons } from "./OccupationButtons";
import { ContentGrid, HeaderRow, Panel, TitleLink } from '../styled/home/occupationPanelStyle';

type Props = {
  title?: string;
  linkHref?: string;
  onSelect?: (term: string) => void;
};

const OccupationPanel = ({
  title = "Se jobb",
  linkHref = "/jobs",
  onSelect,
}: Props) => {
  return (
    <Panel>
      <HeaderRow>
        <h3>{title}</h3>
        <TitleLink to={linkHref}>Visa alla</TitleLink>
      </HeaderRow>

      <ContentGrid>
        <TopOccupationsBar />
        <OccupationButtons onSelect={onSelect} />
      </ContentGrid>
    </Panel>
  );
};

export default OccupationPanel;
