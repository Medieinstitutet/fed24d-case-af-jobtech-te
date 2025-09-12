export interface IJobAd {
    id: string;
    headline?: string;
 
    employer?: { name?: string | null; workplace?: string | null };
 
    occupation_field?: { id?: string; label?: string | null };
    occupation?: { label?: string | null };
 
    logo_url?: string;
 
    workplace_address?: {
        city?: string | null;
        municipality?: string | null;
        region?: string | null;
        country?: string | null;
    };
 
    description?: {
        text?: string;
        text_formatted?: string;
    };
 
    publication_date?: string;
    last_publication_date?: string;
    application_deadline?: string | null;
 
    employment_type?: { id?: string; label?: string | null };
    schedule_type?: { id?: string; label?: string | null }; // (= working_hours_type i vissa payloads)
    salary_type?: { id?: string; label?: string | null };
 
    webpage_url?: string | null;
    source_links?: Array<{ url: string; label?: string }>;
}
 