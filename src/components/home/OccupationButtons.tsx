// src/components/home/OccupationButtons.tsx

import { useNavigate } from "react-router";
import { useJobs } from "../../contexts/JobContext";
import { Buttons, ButtonsGrid } from '../styled/home/occupationButtons';


type Props = {
  onSelect?: (label: string) => void;
  limit?: number;

};

export const OccupationButtons = ({ onSelect, limit = 6 }: Props) => {
  const { state } = useJobs();
  const navigate = useNavigate();

  const labels = (state.topLabels ?? []).slice(0, limit);
  if (!labels.length) return null;

  const handleClick = (label: string) => {
    if (onSelect) onSelect(label);
    else navigate(`/jobs?q=${encodeURIComponent(label)}`);
  };

  return (
    <ButtonsGrid aria-label="Snabbsök yrkesområden">
      {labels.map((label) => (
        <Buttons key={label} type="button" onClick={() => handleClick(label)}>
          {label}
        </Buttons>
      ))}
    </ButtonsGrid>
  );
};
