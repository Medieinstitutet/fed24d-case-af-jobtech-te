export class Job {
    id: string;
    headline: string;
    employer?: {
        name: string;
    }
    occupation_field?: {
        label: string;
    }
    constructor(id: string, headline: string, employer?: { name: string }, occupation_field?: { label: string }) {
        this.id = id;
        this.headline = headline;
        this.employer = employer;
        this.occupation_field = occupation_field;
    }
}