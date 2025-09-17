import { useEffect, useMemo, useState } from "react";
import type { Job } from "../models/Job";
import type { IJobAd } from "../models/IJobAd";
import { fetchJobs } from "../services/jobService";
import { Card, Title, List, ListItem } from "./styled/home/TopOccupationsStyle"

type AnyJob = Job | IJobAd;

function getOccupationLabel (j: AnyJob): string {
  const any = j as any;
  return (
    any?.occupation_field?.label ||
    any?.occupation?.label ||
    any?.occupation_label ||
    any?.profession?.label ||
    "Okänt yrke"
  ).toString().trim();
}

function groupTopOccupations (jobs: AnyJob[]) {
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
  jobs?: AnyJob[];
  data?: { name: string; count: number }[];
  title?: string;
  query?: string;
  offset?: number;
  limit?: number;
};

export default function TopOccupationsBar ({
  jobs,
  data,
  title = "Topp 5 yrken just nu",
  query = "",
  offset = 0,
  limit = 25,
}: Props) {
  const [ownJobs, setOwnJobs] = useState<AnyJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Hämta själv bara om jobs-prop saknas
  useEffect(() => {
    if (jobs && jobs.length) return;

    (async () => {
      try {
        setLoading(true);
        setErr(null);


        const res1 = await fetchJobs(query, offset, limit);
        if (res1?.jobs?.length) {
          console.log("[TopOcc] fetchJobs OK:", res1.jobs.length);
          setOwnJobs(res1.jobs as AnyJob[]);
          return;
        }

        // enkel fallback: använder a om tom query gav noll
        if (!query) {
          const res2 = await fetchJobs("a", 0, limit);
          if (res2?.jobs?.length) {
            console.log("[TopOcc] fetchJobs('a') OK:", res2.jobs.length);
            setOwnJobs(res2.jobs as AnyJob[]);
            return;
          }
        }

        setErr("Inga jobb hittades.");
      } catch (e: any) {
        console.warn("[TopOcc] fetchJobs fel:", e);
        setErr(e?.message ?? "Något gick fel vid hämtning av jobb");
      } finally {
        setLoading(false);
      }
    })();
  }, [jobs, query, offset, limit]);

  const source = jobs?.length ? jobs : ownJobs;

  const items = useMemo(() => {
    if (data?.length) return data;
    return groupTopOccupations(source || []);
  }, [data, source]);

  if (err) return <section><h3>{title}</h3><p role="alert">{err}</p></section>;
  if (loading) return <section><h3>{title}</h3><p>Laddar…</p></section>;
  if (!items.length) return <section><h3>{title}</h3><p>Inga data att visa ännu.</p></section>;

  return (
    <Card>
      <Title>{title}</Title>

      {err && <p role="alert">{err}</p>}
      {loading && <p>Laddar…</p>}
      {!loading && !err && !items.length && <p>Inga data att visa ännu.</p>}

      {!loading && !err && !!items.length && (
        <List>
          {items.map((row) => (
            <ListItem key={row.name}>
              <span>{row.name}</span>
              <strong>{row.count}</strong>
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
}
