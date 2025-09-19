import { PageTitle } from '../styled/global/Pages';
import { BaseBlockCard, Columns } from "../styled/global/Wrappers";
import { AvatarCircle, InitialsClip, AvatarTitle, DigiLink, Role, LinkWrap } from "../styled/home/avatarStyle";

export type Person = {
    initials: string;
    name: string;
    role: string;
    img?: string; // optional background image for the initials fill
};

type TeamAvatarProps = {
    people?: Person[];
};


const defaultPeople: Person[] = [
    { initials: "E.W", name: "Emelie Wiberg", role: "Co-founder — Frontendutvecklare" },
    { initials: "W.O", name: "Wiktor Okonski", role: "Co-founder — Frontendutvecklare" },
    { initials: "T.N", name: "Therese Nielsen", role: "Co-founder — Frontendutvecklare" },
];

export const TeamAvatar = ({ people = defaultPeople }: TeamAvatarProps) => {
    return (
        <>
            <PageTitle as='h3' $align='left' $padding='0 2rem' >Vi som jobbar här</PageTitle>

            <Columns $max='800px' $colMin='200px'>
                {people.map((p) => (
                    <BaseBlockCard
                        as="article"
                        key={p.name}
                        $maxW="100%"
                        $bg="var(--brand-purple-100)"
                        aria-label={p.name}
                    >
                        <AvatarCircle>
                            <InitialsClip $img={p.img} aria-hidden>
                                {p.initials}
                            </InitialsClip>
                        </AvatarCircle>

                        <AvatarTitle>{p.name}</AvatarTitle>
                        <Role>{p.role}</Role>
                    </BaseBlockCard>
                ))}
            </Columns>

            <LinkWrap>
                <DigiLink href="/team">Läs mer om resten av vårt team</DigiLink>
            </LinkWrap>
        </>
    );
};
