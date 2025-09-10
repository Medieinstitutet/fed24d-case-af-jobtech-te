import { useMemo } from "react";
import type { Job } from "../models/Job";

function getOccupationLabel(j: Job): string {
  return (
    (j as any)?.occupation_field?.label ||
    (j as any)?.occupation?.label ||
    (j as any)?.occupation_label ||
    "Okänt yrke"
  ).toString().trim();
}

function groupTopOccupations(jobs: Job[]) {
  const map = new Map<string, number>();
  for (const j of jobs) {
    const key = getOccupationLabel(j);
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

type Props = {
  jobs?: Job[];
  data?: { name: string; count: number }[];
  title?: string;
};

export default function TopOccupations({ jobs, data, title = "Topp 5 yrken just nu" }: Props) {
  const items = useMemo(() => {
    if (data && data.length) return data;
    return groupTopOccupations(jobs || []);
  }, [jobs, data]);

  if (!items.length) return <section><h3>{title}</h3><p>Inga data att visa ännu.</p></section>;

  return (
    <section>
      <h3>{title}</h3>
      {/* ADDERA STYLING */}
      <ol>
        {items.map(row => (
          <li key={row.name} data-count={row.count}>
            <span>{row.name}</span> — <strong>{row.count}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}
