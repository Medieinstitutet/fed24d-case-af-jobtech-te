// src/components/home/OffersCta.tsx
import { DigiButton } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router";
import { BaseBlockCard, Columns } from "../styled/global/Wrappers";
import { OffersList, OffersListItem } from "../styled/home/offersCtaStyle";

export const OffersCta = () => {
    const navigate = useNavigate();

    return (
        <Columns $max="100%" $colMin="280px" $gap="1rem" aria-label="Erbjudanden och genvägar">
            {/* Kort 1: Vad erbjuder JobbCentralen? */}
            <BaseBlockCard
                as="article"
                $maxW="100%"
                $bg="var(--brand-purple-50)"
                aria-labelledby="offer-title"
            >
                <h3 id="offer-title">Vad erbjuder JobbCentralen?</h3>
                <OffersList>
                    <OffersListItem>Sök bland aktuella jobb – utan konto.</OffersListItem>
                    <OffersListItem>Filtrera på ort, roll och omfattning.</OffersListItem>
                    <OffersListItem>Få personliga tips och vägledning.</OffersListItem>
                </OffersList>
            </BaseBlockCard>

            {/* Kort 2: Sök jobb */}
            <BaseBlockCard
                as="article"
                $maxW="100%"
                $bg="var(--accent-warm-100)"
                aria-labelledby="search-title"
            >
                <h3 id="search-title">Sök jobb i vår bas</h3>
                <p>Skriv ett yrke eller en plats – vi visar träffar.</p>
                <p role="note">Tips: kombinera yrke och ort för träffsäkrare resultat.</p>
                <DigiButton afVariation="primary" afSize="large" onClick={() => navigate("/jobs")}>
                    Sök jobb
                </DigiButton>
            </BaseBlockCard>

            {/* Kort 3: Boka rådgivning */}
            <BaseBlockCard
                as="article"
                $bg="var(--digi--color--background--inverted-5)"
                aria-labelledby="advice-title"
                $maxW="100%"
            >
                <h3 id="advice-title">Boka rådgivning</h3>
                <p>Prata med en rådgivare och få en plan. CV-feedback, ansökan och nästa steg.</p>
                <DigiButton afVariation="secondary" afSize="large" onClick={() => navigate("/radgivning")}>
                    Boka vägledning
                </DigiButton>
            </BaseBlockCard>
        </Columns>
    );
};
